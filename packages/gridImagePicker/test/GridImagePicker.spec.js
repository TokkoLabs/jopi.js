import React from 'react'
import { act } from 'react-dom/test-utils'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GridImagePicker from '../src'
import { mockFetch, restoreFetch } from './setup'
import imagesUrls from './images'

configure({ adapter: new Adapter() })

const OriginalImage = global.Image

describe('GridImagePicker', () => {
  beforeAll(async () => {
    mockFetch()

    global.Image = class {
      constructor() {
        setTimeout(() => {
          this.height = 100
          this.width = 250
          this.onload()
        }, 0)
      }
    }
  })

  afterAll(() => {
    restoreFetch()

    global.Image = OriginalImage
  })

  it('Should render properly', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<GridImagePicker listOfSrc={imagesUrls} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(wrapper).toBeDefined()
  })

  it('Should render control buttons properly', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<GridImagePicker listOfSrc={imagesUrls} />)
      await new Promise(resolve => setTimeout(resolve, 100))
    })

    const selectableButton = wrapper.find({ children: 'Select' })
    const deselectableButton = wrapper.find({ children: 'Deselect' })

    expect(selectableButton).toBeDefined()
    expect(deselectableButton).toBeDefined()
  })

  it('Should have an error based on aspect ratio', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<GridImagePicker listOfSrc={imagesUrls} minAspectRatio={14} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()

    const imageItems = wrapper.find('.imageItemError').hostNodes()

    imageItems.forEach(item => {
      expect(item.prop('data-visible')).toBe(true)
    })
  })

  it('Should have an error based on size', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<GridImagePicker listOfSrc={imagesUrls} maxSizeInMB={0} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()

    const imageItems = wrapper.find('.imageItemError').hostNodes()

    imageItems.forEach((item, index) => {
      expect(item.prop('data-visible')).toBe(true)
    })
  })

  it('Should be all (possible) items active after selection toggles', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<GridImagePicker listOfSrc={imagesUrls} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    const deselectButton = wrapper.findWhere(node => node.type() === 'button' && node.text().startsWith('Deselect'))
    const selectButton = wrapper.findWhere(node => node.type() === 'button' && node.text().startsWith('Select'))

    deselectButton.simulate('click')
    selectButton.simulate('click')
    wrapper.update()

    const imageItems = wrapper.find('.imageItemCheckbox').hostNodes()

    imageItems.forEach(item => {
      expect(item.prop('data-active')).toBe(true)
      expect(item.prop('data-visible')).toBe(true)
    })
  })

  it('Should all the items having the check active except the last one', async () => {
    let wrapper
  
    await act(async () => {
      wrapper = mount(<GridImagePicker listOfSrc={imagesUrls} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    const imageItems = wrapper.find('.imageItemWrapper').hostNodes()

    await act(async () => {
      imageItems.at(imageItems.length - 1).simulate('click')
    })

    await act(async () => {
      imageItems.at(imageItems.length - 2).simulate('click')
    })

    await act(async () => {
      imageItems.at(imageItems.length - 2).simulate('click')
    })
    wrapper.update()

    const checkboxes = wrapper.find('.imageItemCheckbox').hostNodes()

    checkboxes.forEach((item, index) => {
      if (index === checkboxes.length - 1) {
        expect(item.prop('data-active')).toBe(false)
      } else {
        expect(item.prop('data-active')).toBe(true)
      }
    })
  })
})

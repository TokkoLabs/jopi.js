import React from 'react'
import { act } from 'react-dom/test-utils'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GridImagePicker from '../src'
import { mockFetch, restoreFetch } from './setup'
import imagesUrls from './images'

configure({ adapter: new Adapter() })

const OriginalImage = global.Image

const texts = {
  cover: 'Mock cover text',
  fetchError: 'Mock fetch error',
  sizeError: 'Mock size error',
  aspectRatioError: 'Mock aspect ratio error',
}

describe('GridImagePicker', () => {
  beforeAll(() => {
    mockFetch()

    global.Image = class {
      constructor () {
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

  const mountGridImagePicker = async (props = { texts }) => {
    let wrapper
    await act(async () => {
      wrapper = mount(<GridImagePicker listOfSrc={imagesUrls} {...props} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()
    return wrapper
  }

  it('Should render properly', async () => {
    const wrapper = await mountGridImagePicker()
    expect(wrapper).toBeDefined()
  })

  it('Should render control buttons properly', async () => {
    const wrapper = await mountGridImagePicker()

    const selectButton = wrapper.find({ children: 'Seleccionar' })
    const deselectButton = wrapper.find({ children: 'Deseleccionar' })

    expect(selectButton).toBeDefined()
    expect(deselectButton).toBeDefined()
  })

  it('Should display an error based on aspect ratio', async () => {
    const wrapper = await mountGridImagePicker({ minAspectRatio: 14, texts })

    const errorItems = wrapper.find('.imageItemError').hostNodes()
    errorItems.forEach(item => {
      expect(item.prop('data-visible')).toBe(true)
    })
  })

  it('Should display an error based on size', async () => {
    const wrapper = await mountGridImagePicker({ maxSizeInMB: 0, texts })

    const errorItems = wrapper.find('.imageItemError').hostNodes()
    errorItems.forEach(item => {
      expect(item.prop('data-visible')).toBe(true)
    })
  })

  it('Should activate all items after selection toggles', async () => {
    const wrapper = await mountGridImagePicker()

    const deselectButton = wrapper.findWhere(node => node.type() === 'button' && node.text().startsWith('Deseleccionar'))
    const selectButton = wrapper.findWhere(node => node.type() === 'button' && node.text().startsWith('Seleccionar'))

    deselectButton.simulate('click')
    selectButton.simulate('click')
    wrapper.update()

    const checkboxes = wrapper.find('.imageItemCheckbox').hostNodes()
    checkboxes.forEach(item => {
      expect(item.prop('data-active')).toBe(true)
      expect(item.prop('data-visible')).toBe(true)
    })
  })

  it('Should activate all items except the last one after specific toggles', async () => {
    const wrapper = await mountGridImagePicker()

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
      const isLastItem = index === checkboxes.length - 1
      expect(item.prop('data-active')).toBe(!isLastItem)
    })
  })
})

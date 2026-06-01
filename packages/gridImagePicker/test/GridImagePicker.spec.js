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
      wrapper = mount(<GridImagePicker listOfImages={imagesUrls} {...props} />)
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
    const deselectButton = wrapper.find({ children: 'Deseleccionar todos' })

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

    const deselectButton = wrapper.findWhere(node => node.type() === 'button' && node.text().startsWith('Deseleccionar todos'))
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

  it('Should reflect a freshly edited image (switch appears and shows the edited preview)', async () => {
    const editedSrc = 'data:image/png;base64,EDITED_VERSION'
    const sizeFetcher = jest.fn(() =>
      Promise.resolve({
        blob: () => Promise.resolve(new window.Blob(['mock'], { type: 'image/jpeg' })),
      })
    )

    let wrapper
    await act(async () => {
      wrapper = mount(<GridImagePicker listOfImages={imagesUrls} texts={texts} sizeFetcher={sizeFetcher} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()

    // The switch is hidden while the image has no edited version.
    expect(wrapper.find('.imageItemSwitch').hostNodes().at(0).prop('data-visible')).toBe(false)

    // Simulate finishing an edit: the source list now carries the edited version.
    const editedList = imagesUrls.map((image, index) =>
      index === 0 ? { ...image, editedSrc } : image
    )
    await act(async () => {
      wrapper.setProps({ listOfImages: editedList })
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    wrapper.update()

    // The switch now appears (editedSrc synced) and the preview points to the
    // new edited image (editedSrc synced and used as the displayed source).
    expect(wrapper.find('.imageItemSwitch').hostNodes().at(0).prop('data-visible')).toBe(true)
    expect(sizeFetcher).toHaveBeenCalledWith(editedSrc)
  })

  it('Should flip the switch to the edited version after a re-edit even if "Original" was selected', async () => {
    // The first image already has an edited version equal to its own src, so the
    // switch is present from the start.
    const initialList = imagesUrls.map((image, index) =>
      index === 0 ? { ...image, editedSrc: image.src } : image
    )

    let wrapper
    await act(async () => {
      wrapper = mount(<GridImagePicker listOfImages={initialList} texts={texts} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()

    const switchOptions = wrapper.find('.imageItemSwitch').hostNodes().at(0).find('.imageItemSwitchOption').hostNodes()
    // "Editada" is active by default.
    expect(switchOptions.at(1).prop('data-active')).toBe(true)

    // The user toggles to "Original".
    await act(async () => {
      switchOptions.at(0).simulate('click')
    })
    wrapper.update()
    expect(wrapper.find('.imageItemSwitch').hostNodes().at(0).find('.imageItemSwitchOption').hostNodes().at(0).prop('data-active')).toBe(true)

    // The user edits the image: the source list now carries a new edited version.
    const editedSrc = 'data:image/png;base64,EDITED_VERSION'
    const editedList = initialList.map((image, index) =>
      index === 0 ? { ...image, editedSrc } : image
    )
    await act(async () => {
      wrapper.setProps({ listOfImages: editedList })
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    wrapper.update()

    // The switch flips back to the edited version.
    expect(wrapper.find('.imageItemSwitch').hostNodes().at(0).find('.imageItemSwitchOption').hostNodes().at(1).prop('data-active')).toBe(true)
  })

  it('Should expose per-image isEditedActive through onChange and update it on toggle', async () => {
    const initialList = imagesUrls.map((image, index) =>
      index === 0 ? { ...image, editedSrc: image.src } : image
    )
    const onChange = jest.fn()

    let wrapper
    await act(async () => {
      wrapper = mount(<GridImagePicker listOfImages={initialList} texts={texts} onChange={onChange} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()

    // Every item carries its viewed-version flag; it starts on the edited side.
    const initialItems = onChange.mock.calls[onChange.mock.calls.length - 1][0]
    expect(initialItems[0].isEditedActive).toBe(true)
    expect(initialItems.every(item => 'isEditedActive' in item)).toBe(true)

    // Toggling to "Original" is reflected in the next onChange snapshot.
    await act(async () => {
      wrapper.find('.imageItemSwitch').hostNodes().at(0).find('.imageItemSwitchOption').hostNodes().at(0).simulate('click')
    })
    wrapper.update()

    const updatedItems = onChange.mock.calls[onChange.mock.calls.length - 1][0]
    expect(updatedItems[0].isEditedActive).toBe(false)
  })

  it('Should fire onSwitchChange on the automatic flip when an image gets edited', async () => {
    const onSwitchChange = jest.fn()
    const initialList = imagesUrls.map((image, index) =>
      index === 0 ? { ...image, editedSrc: image.src } : image
    )

    let wrapper
    await act(async () => {
      wrapper = mount(<GridImagePicker listOfImages={initialList} texts={texts} onSwitchChange={onSwitchChange} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()

    // The user toggles to "Original" so the automatic flip is observable.
    await act(async () => {
      wrapper.find('.imageItemSwitch').hostNodes().at(0).find('.imageItemSwitchOption').hostNodes().at(0).simulate('click')
    })
    wrapper.update()
    expect(onSwitchChange).toHaveBeenLastCalledWith(expect.objectContaining({ id: 1 }), false)

    // The image gets a new edited version: the flip back to edited must notify.
    const editedList = initialList.map((image, index) =>
      index === 0 ? { ...image, editedSrc: 'data:image/png;base64,EDITED_VERSION' } : image
    )
    await act(async () => {
      wrapper.setProps({ listOfImages: editedList })
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    wrapper.update()

    expect(onSwitchChange).toHaveBeenLastCalledWith(expect.objectContaining({ id: 1 }), true)
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

  it('Should keep a manually deselected item deselected after toggling the Original/Editada switch', async () => {
    // The first image has a distinct edited source, so toggling the switch reloads the displayed source.
    const initialList = imagesUrls.map((image, index) =>
      index === 0
        ? { ...image, editedSrc: 'data:image/png;base64,EDITED_DISTINCT_VERSION' }
        : image
    )

    let wrapper
    await act(async () => {
      wrapper = mount(<GridImagePicker listOfImages={initialList} texts={texts} />)
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    wrapper.update()

    // All items start selected by the initial auto-select.
    const initialCheckboxes = wrapper.find('.imageItemCheckbox').hostNodes()
    initialCheckboxes.forEach(item => expect(item.prop('data-active')).toBe(true))

    // The user manually deselects the last item.
    const imageItems = wrapper.find('.imageItemWrapper').hostNodes()
    await act(async () => {
      imageItems.at(imageItems.length - 1).simulate('click')
    })
    wrapper.update()
    expect(
      wrapper.find('.imageItemCheckbox').hostNodes().at(imageItems.length - 1).prop('data-active')
    ).toBe(false)

    // Toggling to "Original" re-fetches the displayed source and flips itemsAreReady; this must NOT re-run the initial auto-select.
    await act(async () => {
      wrapper.find('.imageItemSwitch').hostNodes().at(0).find('.imageItemSwitchOption').hostNodes().at(0).simulate('click')
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    wrapper.update()

    // The manually deselected item stays deselected.
    expect(
      wrapper.find('.imageItemCheckbox').hostNodes().at(imageItems.length - 1).prop('data-active')
    ).toBe(false)
  })
})

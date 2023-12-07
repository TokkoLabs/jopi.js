/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Gallery } from '../src'

configure({ adapter: new Adapter() })

describe('Gallery', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Gallery />)
    expect(wrapper).toBeDefined()
  })

  it('renders correct number of tabs', () => {
    const wrapper = mount(<Gallery images={['', '']} />)
    const btn = wrapper.find('.buttonGallery')

    expect(btn.at(0).text()).toBe('Fotos')
  })

  it('toggles fullscreen correctly', () => {
    const wrapper = mount(
      <Gallery
        images={['', '']}
        video={['', '']}
        video360={['', '']}
        planos={['', '']}
      />
    )
    const fullscreenButton = wrapper.find('.firstTabImg').at(0)

    fullscreenButton.simulate('click')

    const tab = wrapper.find('.fsTabHeader')

    expect(tab.at(0).text()).toBe('VideosVideo360FotosPlanos')
  })

  it('change img', () => {
    const wrapper = mount(<Gallery images={['', '']} />)
    const next = wrapper.find('.iconNext').at(0)

    next.simulate('click')

    const contador1 = wrapper.find('.contFotos')

    expect(contador1.at(0).text()).toBe('2/2')

    const prev = wrapper.find('.iconPrev').at(0)

    prev.simulate('click')

    const contador2 = wrapper.find('.contFotos')

    expect(contador2.at(0).text()).toBe('1/2')
  })

  it('close fullscreen', () => {
    const wrapper = mount(<Gallery images={['', '']} />)
    const closeBtn = wrapper.find('.closeIcon').at(0)

    closeBtn.simulate('click')
  })
})

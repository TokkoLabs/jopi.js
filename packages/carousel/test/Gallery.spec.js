/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Carousel } from '../src'

configure({ adapter: new Adapter() })

describe('Carousel', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Carousel />)
    expect(wrapper).toBeDefined()
  })

  it('renders correct number of tabs', () => {
    const wrapper = mount(<Carousel images={['', '']} />)
    const btn = wrapper.find('.buttonGallery')

    expect(btn.at(0).text()).toBe('Fotos')
  })

  it('toggles fullscreen correctly', () => {
    const wrapper = mount(
      <Carousel
        images={['', '']}
        video={['', '']}
        video360={['', '']}
        planos={['', '']}
        frontCoverImg={['img']}
        frontCoverBlueprints={['img']}
      />
    )
    const fullscreenButton = wrapper.find('.firstTabImg').at(0)

    fullscreenButton.simulate('click')

    const tab = wrapper.find('.fsTabHeader')

    expect(tab.at(0).text()).toBe('VideosVideo360FotosPlanos')

    const videosNode = wrapper
      .findWhere((node) => node.text() === 'Videos')
      .at(0)

    videosNode.simulate('click')

    const panosNode = wrapper
      .findWhere((node) => node.text() === 'Planos')
      .at(0)

    panosNode.simulate('click')

    const Video360 = wrapper
      .findWhere((node) => node.text() === 'Video360')
      .at(0)

    Video360.simulate('click')
  })

  it('change img', () => {
    const wrapper = mount(<Carousel images={['', '']} />)
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
    const wrapper = mount(<Carousel images={['', '']} />)
    const closeBtn = wrapper.find('.closeIcon').at(0)

    closeBtn.simulate('click')
  })
})

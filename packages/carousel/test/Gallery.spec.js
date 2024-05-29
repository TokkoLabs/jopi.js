/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Carousel } from '../src'
import { SliderSwap } from '../src/components/SliderSwap'
import { ImageCard } from '../src/components/ImageCard'
import { Box } from '@oneloop/box'
import { Button } from '@oneloop/button'

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

  it('fullscreen doesnt open with button prop sended', () => {
    const wrapper = mount(
      <Carousel
        images={['', '']}
        video={['', '']}
        video360={['', '']}
        planos={['', '']}
        frontCoverImg={['img']}
        frontCoverBlueprints={['img']}
        otherButton={true}
      />
    )
    const fullscreenButton = wrapper.find('.firstTabImg').at(0)

    fullscreenButton.simulate('click')

    const fullscrenComponent = wrapper.find('.fullscreen')
    expect(fullscrenComponent.first().hasClass('openFullscreen')).toBe(false)
  })

  it('renders SliderSwap component when window width is less than 600', () => {
    window.innerWidth = 500

    const wrapper = shallow(<Carousel />)

    expect(wrapper.find('SliderSwap').length).toEqual(1)
  })

  it('renders otherButton in SliderSwap component when is sended', () => {
    window.innerWidth = 500

    const wrapper = mount(<Carousel otherButton={<Button />} />)

    expect(wrapper.find('.otherButtonSwap').exists()).toBe(true)
  })

  /*   it('change img', () => {
    const wrapper = mount(<Carousel images={['', '']} />)

    const next = wrapper.find('.iconNext').at(0)

    next.simulate('click')

    const contador1 = wrapper.find('.contFotos')

    expect(contador1.at(0).text()).toBe('2/2')

    const prev = wrapper.find('.iconPrev').at(0)

    prev.simulate('click')

    const contador2 = wrapper.find('.contFotos')

    expect(contador2.at(0).text()).toBe('1/2')
  }) */

  it('close fullscreen', () => {
    const wrapper = mount(<Carousel images={['', '']} />)

    const closeBtn = wrapper.find('.closeIcon').at(0)

    closeBtn.simulate('click')
  })

  it('renders without crashing', () => {
    shallow(<SliderSwap />)
  })

  it('renders correct number of ImageCard components', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

    const wrapper = shallow(<SliderSwap files={images} />)

    expect(wrapper.find('ImageCard').length).toEqual(images.length)
  })
  it('renders navigation icons', () => {
    const wrapper = shallow(<SliderSwap />)

    expect(wrapper.find('.swapSliderIconPrev').length).toEqual(1)

    expect(wrapper.find('.swapSliderIconNext').length).toEqual(1)
  })

  it('should render with background image', () => {
    const imageUrl = 'https://example.com/image.jpg'

    const wrapper = mount(<ImageCard url={imageUrl} />)

    expect(
      wrapper.find('.image-card').at(0).prop('__css').backgroundImage
    ).toEqual(`url(${imageUrl})`)
  })

  it('should render with contain background size if image is not a rectangle', () => {
    const imageUrl = 'https://example.com/not-a-rectangle-image.jpg'

    const wrapper = mount(<ImageCard url={imageUrl} />)

    expect(
      wrapper.find('.image-card').at(0).prop('__css').backgroundSize
    ).toEqual('contain')
  })
})

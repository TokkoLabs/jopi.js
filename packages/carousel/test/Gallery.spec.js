/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Carousel } from '../src'
import { SliderSwap } from '../src/components/SliderSwap'
import { ImageCard } from '../src/components/ImageCard'
import { Button } from '@oneloop/button'
import { ButtonsMainImage } from '../src/components/ButtonsMainImage'

const defaultTabTextsDict = {
  videos: 'Videos',
  video360: 'Video 360°',
  photos: 'Fotos',
  bluePrints: 'Planos',
}

configure({ adapter: new Adapter() })
const delayTime = 1000

const waitAndDo = (callback) =>
  new Promise((resolve) =>
    setTimeout(() => {
      callback()
      resolve()
    }, delayTime)
  )

describe('Carousel', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Carousel tabTextsDict={defaultTabTextsDict} />)

    expect(wrapper).toBeDefined()
  })

  it('renders correct number of tabs', async () => {
    const wrapper = mount(
      <ButtonsMainImage tabTextsDict={defaultTabTextsDict} images={['', '']} />
    )
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

    expect(tab.at(0).text()).toBe('VideosVideo 360°FotosPlanos')

    const videosNode = wrapper
      .findWhere((node) => node.text() === 'Videos')
      .at(0)

    videosNode.simulate('click')

    const panosNode = wrapper
      .findWhere((node) => node.text() === 'Planos')
      .at(0)

    panosNode.simulate('click')

    const Video360 = wrapper
      .findWhere((node) => node.text() === 'Video 360°')
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
        otherButton
        tabTextsDict={defaultTabTextsDict}
      />
    )
    const fullscreenButton = wrapper.find('.firstTabImg').at(0)

    fullscreenButton.simulate('click')

    const fullscrenComponent = wrapper.find('.fullscreen')
    expect(fullscrenComponent.first().hasClass('openFullscreen')).toBe(false)
  })

  it('renders SliderSwap component when window width is less than 786', () => {
    window.innerWidth = 500
    const wrapper = shallow(<Carousel tabTextsDict={defaultTabTextsDict} />)
    setTimeout(() => {
      expect(wrapper.find('SliderSwap').length).toEqual(1)
    }, 1000)
  })

  it('renders otherButton in SliderSwap component when is sended', () => {
    window.innerWidth = 500

    const wrapper = mount(
      <Carousel tabTextsDict={defaultTabTextsDict} otherButton={<Button />} />
    )

    expect(wrapper.find('.otherButtonSwap').exists()).toBe(true)
  })

  it('close fullscreen', () => {
    const wrapper = mount(
      <Carousel tabTextsDict={defaultTabTextsDict} images={['', '']} />
    )

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
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

    const wrapper = shallow(<SliderSwap files={images} />)

    expect(wrapper.find('.swapSliderIconPrev').length).toEqual(1)

    expect(wrapper.find('.swapSliderIconNext').length).toEqual(1)
  })

  it('should render with background image', () => {
    const imageUrl = 'https://example.com/image.jpg'

    const wrapper = mount(<ImageCard url={imageUrl} />)
    waitAndDo(() => {
      console.log(wrapper.debug())
      expect(
        wrapper.find('.image-card').at(0).prop('__css').backgroundImage
      ).toEqual(`url(${imageUrl})`)
    })
  })

  it('should render with contain background size if image is not a rectangle', () => {
    const imageUrl = 'https://example.com/not-a-rectangle-image.jpg'

    const wrapper = mount(<ImageCard url={imageUrl} />)
    waitAndDo(() => {
      expect(
        wrapper.find('.image-card').at(0).prop('__css').backgroundSize
      ).toEqual('contain')
    })
  })
})

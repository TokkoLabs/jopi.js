import React from 'react'
import { GridImagePicker } from '.'

// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAKUlEQVR4nO3NMQEAAAjDMED5pGMCvlRA00nqs3m9AwAAAAAAAAAAgMMWvj0BwDVKG0sAAAAASUVORK5CYII=',
// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAIAAAAt/+nTAAAAQElEQVR4nO3PQQ0AIBDAMED5SUcEj4ZkVbDtmVk/OzrgVQNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oD2gVLaQHAY0QxtQAAAABJRU5ErkJggg==',
// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAASUlEQVR4nO3NMQEAAAjDMED5pKMCrlRA00nqsjm9AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4ABYzLwKAkfv2VAAAAABJRU5ErkJggg=='

const INSTAGRAM_RECOMMENDED_MIN_ASPECT_RATIO = 4 / 5
const INSTAGRAM_RECOMMENDED_MAX_ASPECT_RATIO = 1.91 / 1

export default {
  component: GridImagePicker,
  title: 'GridImagePicker',
}

export const normal = () => (
  <GridImagePicker
    minAspectRatio={INSTAGRAM_RECOMMENDED_MIN_ASPECT_RATIO}
    maxAspectRatio={INSTAGRAM_RECOMMENDED_MAX_ASPECT_RATIO}
    listOfSrc={[
      'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s',
      'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      'https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?cs=srgb&dl=pexels-hsapir-1054666.jpg&fm=jpg',
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYq7qbO4AdXp0gXMxvGmnVSc-8OlsMSGrNw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq10gYXsQjI1uLya6MjHpGkLIX5kzVNQYOaQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwB8-oiew0oNWLIPqQGPhcNJOYEzkaPKAbXw&s',
      'https://b.thumbs.redditmedia.com/s-QXg7UUFth82jkXneJB5ahQMdyCsIhG0eAL-iFBRlU.jpg',
      'https://media.vandal.net/i/640x360/10-2023/17/202310171652270_2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3Nakk8OPx919ZVYgOxBq_FFapYcAEVQdBQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKxBCtsEIetdYRldyKjADBJ88W_gk_Sh3qg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbUyUaLlMBdDIiUzN-v1yaBhAk24zzVaRNg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuj-4zb0fZ8bRiVZ3JhkNcm3iU26Oj42HwVg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBExwuuCqBEPFxceL1tTggoj8XaYvxr0X2hA&s',
      'https://cdn.britannica.com/05/187505-131-7E335F18/Benedict-Cumberbatch-2014.jpg',
    ]}
  />
)

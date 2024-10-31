import { GridImagePicker } from '.'

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
    maxSizeInMB={1}
    listOfSrc={[
      'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s',
      'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      'https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?cs=srgb&dl=pexels-hsapir-1054666.jpg&fm=jpg',
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgD7kvvB07XM2OAVeHBNuorFWa0WYz62HuA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLZrMhzXxe5cVkZs5jBQMHeFLO5g5XFEvTg&s',
      'https://i.pinimg.com/236x/50/8f/92/508f92c9320fb89ef2a352ec5ef0a11f.jpg',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c42a30e-710e-4940-8c2f-7e5d66a3a8c9/d96gu2f-bba6ea36-40d2-4e4d-9f5e-b0d21e7045a5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjNDJhMzBlLTcxMGUtNDk0MC04YzJmLTdlNWQ2NmEzYThjOVwvZDk2Z3UyZi1iYmE2ZWEzNi00MGQyLTRlNGQtOWY1ZS1iMGQyMWU3MDQ1YTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ph5RX9j07I90FDd3EZ2tNupMpsLrH-W4O-hsMgha2kM',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYq7qbO4AdXp0gXMxvGmnVSc-8OlsMSGrNw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq10gYXsQjI1uLya6MjHpGkLIX5kzVNQYOaQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwB8-oiew0oNWLIPqQGPhcNJOYEzkaPKAbXw&s',
      'https://external-preview.redd.it/vJ9Xx40u6FQLoVgk-TQ6EO6lKArxmwHkI3-BTcL78tY.png?auto=webp&s=c57688e038ab1df27b70ae6a46f51fbf1f7a4835',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FOSg_Er-VNlPGiDOd7fhYLVDBqPN4XyB2fdVD7S__PDzn8aWRmae1WgenGUBl1lvg20&usqp=CAU',
      'https://b.thumbs.redditmedia.com/s-QXg7UUFth82jkXneJB5ahQMdyCsIhG0eAL-iFBRlU.jpg',
      'https://media.vandal.net/i/640x360/10-2023/17/202310171652270_2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3Nakk8OPx919ZVYgOxBq_FFapYcAEVQdBQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKxBCtsEIetdYRldyKjADBJ88W_gk_Sh3qg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbUyUaLlMBdDIiUzN-v1yaBhAk24zzVaRNg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuj-4zb0fZ8bRiVZ3JhkNcm3iU26Oj42HwVg&s',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyZYMRmhhjJzuZWccl5X-GaHz-og1RF0qi4Az_Qqlp6S_-LOhfUxoWx7C1kfJSlC4wnCwpdMvBPZE1S0utDrd1nYJsYeJ9GJVwm4CLgl2DfY2V9Mq249Ri4dCsDCmclDh0WhlFFEJiE-uH/s1600/favalli2.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBExwuuCqBEPFxceL1tTggoj8XaYvxr0X2hA&s',
      'https://cdn.britannica.com/05/187505-131-7E335F18/Benedict-Cumberbatch-2014.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJO1wXSo5s22szywa4fUfdN1nVdemhLHPNHQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhqwb0Ly5uFQiypj1ZxlwAzd5N-L46-0SuQ&s',
    ]}
  />
)

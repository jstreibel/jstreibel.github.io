
import proPhotoImage from '../assets/pro.jpeg'

import jojoPapaImage from '../assets/jojo-papa.png'
import calvinImage from '../assets/calvin.webp';

export const siteVariants = {
  personal: {
    mainImage: jojoPapaImage,
    cornerImage: calvinImage,
    navigation: [
      { label: 'Hi', to: '/personal/hello' },
      { label: 'Random notes', to: '/personal/notes' },
    ],
  },
  professional: {
    mainImage: proPhotoImage,
    cornerImage: null,
    navigation: [
      { label: 'About', to: '/professional/about' },
      { label: 'Work', to: '/professional/work' },
      { label: 'CV', to: '/professional/work' },
    ],
  },
};

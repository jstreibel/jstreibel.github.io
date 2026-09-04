
import proPhotoImage from '../assets/pro.jpeg'

import jojoPapaImage from '../assets/jojo-papa.png'
import calvinImage from '../assets/calvin.webp';

export const siteVariants = {
  personal: {
    mainImage: jojoPapaImage,
    cornerImage: calvinImage,
    navigation: [
      { label: 'Hi', to: '/personal/hello' },
      // { label: 'Random notes', to: '/personal/notes' },
      { label: 'DevLog', to: '/personal/devlog' },
      { label: 'Links', to: '/personal/links' },
      { label: 'Reach', to: '/personal/reach' },
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

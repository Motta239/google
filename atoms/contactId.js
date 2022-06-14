import { atom } from 'recoil'

export const contactId = atom({
  key: 'contactId',
  default: {
    name: '',
    src: '',
    profile: '',
    open: false,
    source: '',
    openStory: null,
    openMessage: null,
  },
})

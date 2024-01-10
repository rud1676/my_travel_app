import { atom } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const bibleState = atom({
  key: 'bible',
  default: {
    translation: 'GAE',
    name: 'Gen',
    chapter: 1,
  },
});

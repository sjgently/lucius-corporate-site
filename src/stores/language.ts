import { atom } from 'jotai'

export enum Language {
  En = 'en',
  Ja = 'ja'
}

export const languageAtom = atom<Language>(Language.En)

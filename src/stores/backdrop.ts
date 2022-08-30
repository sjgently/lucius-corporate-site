import { atom } from 'jotai'

export enum Backdrop {
  None = 'none',
  Drawer = 'drawer'
}

export const backdropAtom = atom<Backdrop>(Backdrop.None)

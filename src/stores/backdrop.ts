import { atom } from 'jotai'

export enum Backdrop {
  None = 'none',
  Drawer = 'drawer',
  Modal = 'modal'
}

export const backdropAtom = atom<Backdrop>(Backdrop.None)

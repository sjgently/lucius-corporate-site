import { atom } from 'jotai'

export const popupModalAtom = atom({ isOpen: false, text: '' })

export const isOpenPopupModalAtom = atom(
  (get) => get(popupModalAtom).isOpen,
  (get, set, isOpen: boolean) => {
    set(popupModalAtom, { ...get(popupModalAtom), isOpen })
  }
)

export const popupModalTextAtom = atom((get) => get(popupModalAtom).text)

import { useAtom } from 'jotai'

import { Backdrop as BackdropEnum, backdropAtom } from '@src/stores/backdrop'

export default function Backdrop() {
  const [backdrop, setBackdrop] = useAtom(backdropAtom)

  if (backdrop === BackdropEnum.None) {
    return null
  }

  return (
    <div
      onClick={() => setBackdrop(BackdropEnum.None)}
      className='bg-gray-900 bg-opacity-20 dark:bg-opacity-50 fixed inset-0 z-30'
    />
  )
}

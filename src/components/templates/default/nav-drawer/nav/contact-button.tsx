import { useAtom } from 'jotai'

import { Backdrop, backdropAtom } from '@src/stores/backdrop'

export default function ContactButton() {
  const [backdrop, setBackdrop] = useAtom(backdropAtom)

  return (
    <button
      type='button'
      onClick={() =>
        setBackdrop(
          backdrop === Backdrop.None ? Backdrop.Drawer : Backdrop.None
        )
      }
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-3'
    >
      Contact
    </button>
  )
}

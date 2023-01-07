import { useAtom } from 'jotai'

import { Backdrop, backdropAtom } from '@src/stores/backdrop'
import HeroIconX from '@src/components/svgs/hero-icon-x'

export default function CloseButton() {
  const [, setBackdrop] = useAtom(backdropAtom)

  return (
    <button
      type='button'
      onClick={() => setBackdrop(Backdrop.None)}
      className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
    >
      <HeroIconX className='w-5 h-5' />
      <span className='sr-only'>Close menu</span>
    </button>
  )
}

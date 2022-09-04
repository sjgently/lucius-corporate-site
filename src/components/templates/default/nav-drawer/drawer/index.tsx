import { useAtom } from 'jotai'

import { Backdrop, backdropAtom } from '@src/stores/backdrop'

import CloseButton from './close-button'
import ContactForm from './contact-form'
import ContactLink from './contact-link'

const baseClassList = [
  'fixed',
  'right-0',
  'top-0',
  'z-40',
  'h-screen',
  'p-4',
  'overflow-y-auto',
  'bg-white',
  'w-80',
  'dark:bg-gray-800',
  'transition-transform'
]

export default function Drawer() {
  const [backdrop] = useAtom(backdropAtom)

  return (
    <div
      className={
        backdrop === Backdrop.None
          ? [...baseClassList, 'translate-x-full'].join(' ')
          : [...baseClassList, 'transform-none'].join(' ')
      }
      tabIndex={-1}
    >
      <h5 className='inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
        <svg
          className='w-5 h-5 mr-2'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
            clipRule='evenodd'
          ></path>
        </svg>
        Contact us
      </h5>
      <CloseButton />
      <ContactForm />
      <ContactLink additionalClassList={['mb-2']}>info@company.com</ContactLink>
      <ContactLink>212-456-7890</ContactLink>
    </div>
  )
}

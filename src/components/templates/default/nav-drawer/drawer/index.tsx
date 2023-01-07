import { useAtom } from 'jotai'

import { Backdrop, backdropAtom } from '@src/stores/backdrop'
import HeroIconInformationCircle from '@src/components/svgs/hero-icon-information-circle'
import * as companyContent from '@src/contents/pages/home/company.md'

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
        <HeroIconInformationCircle className='w-5 h-5 mr-2' />
        Contact us
      </h5>
      <CloseButton />
      <ContactForm />
      <ContactLink additionalClassList={['mb-2']}>
        {companyContent.frontmatter.email}
      </ContactLink>
      <ContactLink>{companyContent.frontmatter.phone}</ContactLink>
    </div>
  )
}

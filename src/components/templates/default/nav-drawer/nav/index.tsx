import Logo from '@src/components/atoms/logo'

import ThemeToggleButton from './theme-toggle-button'
// import LanguageDropdown from './language-dropdown'
import ContactButton from './contact-button'

export default function Nav() {
  return (
    <nav className='bg-white px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap justify-between items-center mx-auto'>
        <Logo />
        <div className='flex gap-4 md:order-2'>
          <ThemeToggleButton />
          {/* <LanguageDropdown /> */}
          <ContactButton />
        </div>
      </div>
    </nav>
  )
}

import HeroIconMoon from '@src/components/svgs/hero-icon-moon'
import HeroIconSun from '@src/components/svgs/hero-icon-sun'

export default function ThemeToggleButton() {
  return (
    <button
      id='theme-toggle'
      type='button'
      className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
    >
      <HeroIconMoon className='hidden w-5 h-5' id='theme-toggle-dark-icon' />
      <HeroIconSun className='hidden w-5 h-5' id='theme-toggle-light-icon' />
    </button>
  )
}

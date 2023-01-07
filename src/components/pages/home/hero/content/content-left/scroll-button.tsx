import { handleSmoothScroll } from '@src/utils/smooth-scroll-helper'
import HeroIconArrowDown from '@src/components/svgs/hero-icon-arrow-down'

interface IProps {
  children: string
}

export default function ScrollButton({ children }: IProps) {
  return (
    <a
      onClick={() => handleSmoothScroll({ id: 'products', buffer: 61 })}
      className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer'
    >
      {children}
      <HeroIconArrowDown className='w-5 h-5 ml-2 -mr-1' />
    </a>
  )
}

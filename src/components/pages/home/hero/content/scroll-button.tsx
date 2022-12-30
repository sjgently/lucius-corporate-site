import { handleSmoothScroll } from '@src/utils/smooth-scroll-helper'

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
      <svg
        className='w-5 h-5 ml-2 -mr-1'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M19 14l-7 7m0 0l-7-7m7 7V3'
        ></path>
      </svg>
    </a>
  )
}

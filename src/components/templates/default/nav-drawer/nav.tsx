import { Logo } from '@src/components/atoms/logo'

export const Nav = () => (
  <nav className='bg-white px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
    <div className='max-w-screen-xl flex flex-wrap justify-between items-center mx-auto'>
      <Logo />
      <div className='flex md:order-2'>
        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
)

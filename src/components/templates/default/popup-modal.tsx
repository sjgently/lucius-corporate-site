import HeroIconX from '@src/components/svgs/hero-icon-x'

export default function PopupModal() {
  return (
    <div
      tabIndex={-1}
      className='fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-full max-w-md md:h-auto m-auto'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <button
            type='button'
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
          >
            <HeroIconX />
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='px-6 pt-14 pb-6 text-center'>
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this product?
            </h3>
            <button
              type='button'
              className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

import PageSection from '@src/components/molecules/page-section'

const handleSmoothScroll = ({ id, buffer }: { id: string; buffer: number }) => {
  const targetElement = document.getElementById(id)

  if (targetElement === null) {
    return
  }

  const rectTop = targetElement.getBoundingClientRect().top
  const offsetTop = window.scrollY
  const top = rectTop + offsetTop - buffer

  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}

export default function Hero() {
  return (
    <PageSection>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            We supply the sapphire wafer, PSS, and SiC wafer.
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Manufacturing locations: China, Korea, Taiwan, Europe, USA
          </p>
          <a
            onClick={() => handleSmoothScroll({ id: 'products', buffer: 61 })}
            className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer'
          >
            View detail
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
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <img
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
            alt='mockup'
          />
        </div>
      </div>
    </PageSection>
  )
}

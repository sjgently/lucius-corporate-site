import PageSection from '@src/components/molecules/page-section'

import ScrollButton from './scroll-button'

interface IProps {
  mainText: string
  subText: string
}

export default function Content({ mainText, subText }: IProps) {
  return (
    <PageSection additionalClassList={['pt-16']}>
      <div className='grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            {mainText}
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            {subText}
          </p>
          <ScrollButton>View detail</ScrollButton>
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

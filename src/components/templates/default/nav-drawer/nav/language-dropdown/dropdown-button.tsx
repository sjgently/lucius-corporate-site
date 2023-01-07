import CountryIconUs from '@src/components/svgs/country-icon-us'

export default function DropdownButton() {
  return (
    <button
      type='button'
      data-dropdown-toggle='language-dropdown-menu'
      className='inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
    >
      <CountryIconUs className='w-5 h-5 mr-2 rounded-full' />
      English (US)
    </button>
  )
}

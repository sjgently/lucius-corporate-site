import CountryIconUs from '@src/components/svgs/country-icon-us'
import CountryIconJp from '@src/components/svgs/country-icon-jp'

export default function DropdownMenu() {
  return (
    <div
      className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700'
      id='language-dropdown-menu'
    >
      <ul className='py-1' role='none'>
        <li>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
            role='menuitem'
          >
            <div className='inline-flex items-center'>
              <CountryIconJp className='h-3.5 w-3.5 rounded-full mr-2' />
              日本語
            </div>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
            role='menuitem'
          >
            <div className='inline-flex items-center'>
              <CountryIconUs className='h-3.5 w-3.5 rounded-full mr-2' />
              English (US)
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

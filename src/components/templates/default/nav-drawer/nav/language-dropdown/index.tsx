import DropdownButton from './dropdown-button'
import DropdownMenu from './dropdown-menu'

export default function LanguageDropdown() {
  return (
    <div className='container flex flex-wrap items-center justify-between mx-auto'>
      <div className='flex items-center md:order-2'>
        <DropdownButton />
        <DropdownMenu />
      </div>
    </div>
  )
}

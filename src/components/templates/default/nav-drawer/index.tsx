import { useState } from 'react'

import { Nav } from './nav'
import { Drawer } from './drawer'

export const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Nav setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} />
    </>
  )
}

import { NavDrawer } from './nav-drawer'

interface IProps {
  children: React.ReactNode
}

export const DefaultTemplate = ({ children }: IProps) => (
  <div className='py-16'>
    <NavDrawer />
    {children}
  </div>
)

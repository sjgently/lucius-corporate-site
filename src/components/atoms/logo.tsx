const Content = () => (
  <span className='self-center text-xl font-semibold uppercase whitespace-nowrap dark:text-white'>
    lucius
  </span>
)

interface IProps {
  href?: string
}

export const Logo = ({ href }: IProps) =>
  typeof href === 'undefined' ? (
    <Content />
  ) : (
    <a href={href} className='flex items-center'>
      <Content />
    </a>
  )

const baseClassList = ['text-sm', 'text-gray-500', 'dark:text-gray-400']

interface IProps {
  children: string
  href?: string
  additionalClassList?: string[]
}

export default function ContactLink({
  children,
  href,
  additionalClassList = []
}: IProps) {
  return (
    <p className={[...baseClassList, ...additionalClassList].join(' ')}>
      <a href={href} className='hover:underline'>
        {children}
      </a>
    </p>
  )
}

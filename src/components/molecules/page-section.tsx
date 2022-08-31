import Heading from '@src/components/atoms/heading'

const baseClassList = ['bg-white', 'dark:bg-gray-900']

interface IProps {
  id?: string
  title?: string
  additionalClassList?: string[]
  children: React.ReactNode
}

export default function PageSection({
  id,
  title,
  additionalClassList = [],
  children
}: IProps) {
  return (
    <section
      id={id}
      className={[...baseClassList, ...additionalClassList].join(' ')}
    >
      {typeof title !== 'undefined' && <Heading level={1}>{title}</Heading>}
      {children}
    </section>
  )
}

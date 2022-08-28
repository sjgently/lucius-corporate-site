import Heading from '@src/components/atoms/heading'

const baseClassList = ['bg-white', 'dark:bg-gray-900']

interface IProps {
  title?: string
  isWithPaddingY?: boolean
  children: React.ReactNode
}

export default function PageSection({
  title,
  isWithPaddingY,
  children
}: IProps) {
  return (
    <section
      className={
        isWithPaddingY
          ? [...baseClassList, 'py-8', 'lg:py-16'].join(' ')
          : baseClassList.join(' ')
      }
    >
      {typeof title !== 'undefined' && <Heading level={1}>{title}</Heading>}
      {children}
    </section>
  )
}

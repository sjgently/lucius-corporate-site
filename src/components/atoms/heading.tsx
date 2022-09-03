const baseClassList = [
  'mx-auto',
  'max-w-screen-xl',
  'px-4',
  'lg:px-6',
  'xl:px-0'
]

const headingOneClassList = [
  ...baseClassList,
  'text-5xl',
  'font-extrabold',
  'dark:text-white'
]

const headingTwoClassList = [
  ...baseClassList,
  'text-4xl',
  'font-bold',
  'dark:text-white'
]

const headingThreeClassList = [
  ...baseClassList,
  'text-3xl',
  'font-bold',
  'dark:text-white'
]

const headingFourClassList = [
  ...baseClassList,
  'text-2xl',
  'font-bold',
  'dark:text-white'
]

const headingFiveClassList = [
  ...baseClassList,
  'text-xl',
  'font-bold',
  'dark:text-white'
]

const headingSixClassList = [
  ...baseClassList,
  'text-lg',
  'font-bold',
  'dark:text-white'
]

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface IProps {
  level: HeadingLevel
  children: string
  additionalClassList?: string[]
}

export default function Heading({
  level,
  children,
  additionalClassList = []
}: IProps) {
  switch (level) {
    case 1:
      return (
        <h1
          className={[...headingOneClassList, ...additionalClassList].join(' ')}
        >
          {children}
        </h1>
      )
    case 2:
      return (
        <h2
          className={[...headingTwoClassList, ...additionalClassList].join(' ')}
        >
          {children}
        </h2>
      )
    case 3:
      return (
        <h3
          className={[...headingThreeClassList, ...additionalClassList].join(
            ' '
          )}
        >
          {children}
        </h3>
      )
    case 4:
      return (
        <h4
          className={[...headingFourClassList, ...additionalClassList].join(
            ' '
          )}
        >
          {children}
        </h4>
      )
    case 5:
      return (
        <h5
          className={[...headingFiveClassList, ...additionalClassList].join(
            ' '
          )}
        >
          {children}
        </h5>
      )
    case 6:
      return (
        <h6
          className={[...headingSixClassList, ...additionalClassList].join(' ')}
        >
          {children}
        </h6>
      )
    default:
      return null
  }
}

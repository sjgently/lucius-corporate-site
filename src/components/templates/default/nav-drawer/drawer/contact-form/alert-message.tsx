interface IProps {
  children: string
}

export default function AlertMessage({ children }: IProps) {
  return (
    <span role='alert' className='mt-2 text-xs text-red-600 dark:text-red-400'>
      {children}
    </span>
  )
}

interface IProps {
  htmlFor: string
  labelText: string
  children: React.ReactNode
}

export default function InputField({ htmlFor, labelText, children }: IProps) {
  return (
    <div className='mb-6'>
      <label
        htmlFor={htmlFor}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {labelText}
      </label>
      {children}
    </div>
  )
}

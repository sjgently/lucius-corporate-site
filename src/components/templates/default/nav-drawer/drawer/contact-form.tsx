import { SubmitHandler, useForm } from 'react-hook-form'
import { parseOneAddress } from 'email-addresses'

const getIsValidEmail = (value: string) => parseOneAddress(value) !== null

const buttonBaseClassList = [
  'text-white',
  'bg-blue-700',
  'w-full',
  'font-medium',
  'rounded-lg',
  'text-sm',
  'px-5',
  'py-2.5',
  'mr-2',
  'mb-2',
  'dark:bg-blue-600',
  'block'
]

type FormData = {
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, watch } = useForm<FormData>()

  const watchEmail = watch('email')
  const isValidEmail = getIsValidEmail(watchEmail)
  const isShowEmailError = !isValidEmail && watchEmail !== ''

  const watchSubject = watch('subject')
  const isValidSubject = watchSubject !== ''

  const watchMessage = watch('message')
  const isValidMessage = watchMessage !== ''

  const isEnableSubmit = isValidEmail && isValidSubject && isValidMessage

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='mb-6'>
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Your email
        </label>
        <input
          id='email'
          {...register('email', {
            required: true,
            validate: (value) => parseOneAddress(value) !== null
          })}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='name@company.com'
        />
        {isShowEmailError && (
          <p
            id='filled_error_help'
            className='mt-2 text-xs text-red-600 dark:text-red-400'
          >
            invalid email
          </p>
        )}
      </div>
      <div className='mb-6'>
        <label
          htmlFor='subject'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Subject
        </label>
        <input
          type='text'
          id='subject'
          {...register('subject', { required: true })}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Let us know how we can help you'
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Your message
        </label>
        <textarea
          id='message'
          {...register('message', { required: true })}
          rows={4}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Your message...'
        />
      </div>
      <button
        type='submit'
        disabled={!isEnableSubmit}
        className={
          isEnableSubmit
            ? [
                ...buttonBaseClassList,
                'hover:bg-blue-800',
                'focus:ring-4',
                'focus:ring-blue-300',
                'dark:hover:bg-blue-700',
                'focus:outline-none',
                'dark:focus:ring-blue-800'
              ].join(' ')
            : [...buttonBaseClassList, 'cursor-not-allowed'].join(' ')
        }
      >
        Send message
      </button>
    </form>
  )
}

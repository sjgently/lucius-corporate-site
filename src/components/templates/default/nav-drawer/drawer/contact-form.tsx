import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const getIsValidEmail = (value: string) => {
  const emailSchema = z.string().email()
  const { success } = emailSchema.safeParse(value)
  return success
}

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful }
  } = useForm<FormData>()

  const watchEmail = watch('email')
  const isValidEmail = getIsValidEmail(watchEmail)
  const isShowEmailError = !isValidEmail && watchEmail !== ''

  const watchSubject = watch('subject')
  const isValidSubject = watchSubject !== ''

  const watchMessage = watch('message')
  const isValidMessage = watchMessage !== ''

  const isEnableSubmit = isValidEmail && isValidSubject && isValidMessage

  const onSubmit: SubmitHandler<FormData> = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data })
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: '', subject: '', message: '' })
    }
  }, [isSubmitSuccessful])

  return (
    <form
      name='contact'
      onSubmit={handleSubmit(onSubmit)}
      autoComplete='off'
      data-netlify='true'
      className='mb-6'
    >
      <input type='hidden' name='form-name' value='contact' />
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Your email
        </label>
        <input
          type='text'
          id='email'
          {...register('email', {
            required: true,
            validate: (value) => getIsValidEmail(value)
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
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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

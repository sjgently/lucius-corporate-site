import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { getIsValidEmail, encode } from '@src/utils/form-helper'

type FormData = {
  email: string
  name: string
  subject: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (Object.values(errors).length > 0) {
      return
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data })
    })
      .then(() => alert('Submit successful! We will get back to you soon.'))
      .catch((error) => alert(`Submit failed: ${error}`))
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: '', name: '', subject: '', message: '' })
    }
  }, [isSubmitSuccessful])

  return (
    <form
      name='contact'
      onSubmit={handleSubmit(onSubmit)}
      autoComplete='off'
      data-netlify='true'
      netlify-honeypot='bot-field'
      className='mb-6'
    >
      <input type='hidden' name='form-name' value='contact' />
      <p className='hidden'>
        <label>
          Don’t fill this out if you’re human: <input name='bot-field' />
        </label>
      </p>
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
          aria-invalid={!!errors['email']}
        />
        {!!errors['email'] && (
          <span
            role='alert'
            className='mt-2 text-xs text-red-600 dark:text-red-400'
          >
            invalid email
          </span>
        )}
      </div>
      <div className='mb-6'>
        <label
          htmlFor='name'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Your name
        </label>
        <input
          type='text'
          id='name'
          {...register('name', { required: true })}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='John Doe'
          aria-invalid={!!errors['name']}
        />
        {!!errors['name'] && (
          <span
            role='alert'
            className='mt-2 text-xs text-red-600 dark:text-red-400'
          >
            please fill your name
          </span>
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
          aria-invalid={!!errors['subject']}
        />
        {!!errors['subject'] && (
          <span
            role='alert'
            className='mt-2 text-xs text-red-600 dark:text-red-400'
          >
            please fill your subject
          </span>
        )}
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
          aria-invalid={!!errors['message']}
        />
        {!!errors['message'] && (
          <span
            role='alert'
            className='mt-2 text-xs text-red-600 dark:text-red-400'
          >
            please fill your message
          </span>
        )}
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 w-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 block hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 '
      >
        Send message
      </button>
    </form>
  )
}

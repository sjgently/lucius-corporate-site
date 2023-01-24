import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAtom } from 'jotai'

import { popupModalAtom } from '@src/stores/popup-modal'
import { getIsValidEmail, encode } from '@src/utils/form-helper'

import InputField from './input-field'
import AlertMessage from './alert-message'

const inputBaseClassList = [
  'bg-gray-50',
  'border',
  'border-gray-300',
  'text-gray-900',
  'text-sm',
  'rounded-lg',
  'focus:ring-blue-500',
  'focus:border-blue-500',
  'block',
  'w-full',
  'p-2.5',
  'dark:bg-gray-700',
  'dark:border-gray-600',
  'dark:placeholder-gray-400',
  'dark:text-white',
  'dark:focus:ring-blue-500',
  'dark:focus:border-blue-500'
]

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

  const [, setPopupModal] = useAtom(popupModalAtom)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (Object.values(errors).length > 0) {
      return
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data })
    })
      .then(() => {
        setPopupModal({
          isOpen: true,
          text: 'Submit successful! We will get back to you soon.'
        })
      })
      .catch((error) => {
        setPopupModal({
          isOpen: true,
          text: `Submit failed: ${error}`
        })
      })
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
      <InputField htmlFor='email' labelText='Your email'>
        <input
          type='text'
          {...register('email', {
            required: true,
            validate: (value) => getIsValidEmail(value)
          })}
          className={inputBaseClassList.join(' ')}
          placeholder='name@company.com'
          aria-invalid={!!errors['email']}
        />
        {!!errors['email'] && <AlertMessage>invalid email</AlertMessage>}
      </InputField>
      <InputField htmlFor='name' labelText='Your name'>
        <input
          type='text'
          id='name'
          {...register('name', { required: true })}
          className={inputBaseClassList.join(' ')}
          placeholder='John Doe'
          aria-invalid={!!errors['name']}
        />
        {!!errors['name'] && <AlertMessage>required</AlertMessage>}
      </InputField>
      <InputField htmlFor='subject' labelText='Subject'>
        <input
          type='text'
          id='subject'
          {...register('subject', { required: true })}
          className={inputBaseClassList.join(' ')}
          placeholder='Let us know how we can help you'
          aria-invalid={!!errors['subject']}
        />
        {!!errors['subject'] && <AlertMessage>required</AlertMessage>}
      </InputField>
      <InputField htmlFor='message' labelText='Your message'>
        <textarea
          id='message'
          {...register('message', { required: true })}
          rows={4}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Your message...'
          aria-invalid={!!errors['message']}
        />
        {!!errors['message'] && <AlertMessage>required</AlertMessage>}
      </InputField>
      <button
        type='submit'
        className='text-white bg-blue-700 w-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 block hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 '
      >
        Send message
      </button>
    </form>
  )
}

'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { message } from 'antd'
import { sendEmail } from '@/helpers/sendEmail'

export type FormData = {
  name: string
  email: string
  message: string
}

const Contactoo: FC = () => {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit(data: FormData) {
    sendEmail(data)
    message.success('Email sent!')
  }

  return (
    <div className="min-h-screen">
      <h1 className="bg-indigo-200 text-5xl w-fit mx-auto text-center my-24 p-3 rounded-3xl">
        Contact us
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 text-center">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Nome
          </label>
          <input
            type="text"
            placeholder="Insert your name"
            className="w-fit rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Insert your email"
            className="w-fit rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            Messaggio
          </label>
          <textarea
            rows={4}
            placeholder="Write your message"
            className="w-fit resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div className="text-center">
          <button className="hover:shadow-form rounded-md bg-pink-700 py-3 px-8 text-base font-semibold text-white outline-none">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contactoo

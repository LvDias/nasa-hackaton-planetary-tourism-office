'use client'

import { ChangeEvent } from 'react'

import Image from 'next/image'

export default function Purchase() {
  const maskCPF = (el: ChangeEvent<HTMLInputElement>) => {
    let regex = /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/
    let element = document.querySelector(`#${el.target.id}`) as HTMLInputElement
    element.value = element.value.replace(regex, '$1.$2.$3-$4')
  }

  const maskPhone = (el: ChangeEvent<HTMLInputElement>) => {
    let regex = /([0-9]{2})([0-9]{5})([0-9]{4})/
    let element = document.querySelector(`#${el.target.id}`) as HTMLInputElement
    element.value = element.value.replace(regex, '($1) $2-$3')
  }

  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-10 items-center w-screen-lg bg-[#0E1D23] p-10'>
        <Image src='/assets/logo.png' width={120} height={120} alt='Logo' />
        <form
          className='flex flex-col gap-5 items-center'
          action='/api/purchase'
          method='post'
        >
          <input
            className='px-5 py-2.5 rounded outline-black/10'
            type='text'
            name='cpf'
            id='cpf'
            placeholder='CPF'
            maxLength={14}
            onChange={(element) => maskCPF(element)}
            required
          />
          <input
            className='px-5 py-2.5 rounded outline-black/10'
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required
          />
          <input
            className='px-5 py-2.5 rounded outline-black/10'
            type='text'
            name='phone'
            id='phone'
            maxLength={11}
            placeholder='Phone'
            onChange={(element) => maskPhone(element)}
            required
          />
          <button className='bg-green-500 px-5 py-2.5 text-center text-white w-full'>
            Purchase
          </button>
        </form>
      </div>
    </main>
  )
}

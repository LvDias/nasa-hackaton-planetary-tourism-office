import Image from 'next/image'

export default function Thanks() {
  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center'>
      <Image
        src='/assets/icons/check-thanks.png'
        width={240}
        height={240}
        alt='check'
      />
      <h1 className='text-5xl text-green-500'>Thanks for purchase!</h1>
    </main>
  )
}

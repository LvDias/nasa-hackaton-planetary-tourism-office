import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex gap-10 items-center justify-between px-10 pt-2.5'>
      <Link
        href='/'
        className='w-20 h-20 bg-no-repeat bg-contain bg-center bg-[url(/assets/logo.png)] cursor-pointer'
      />
    </header>
  )
}

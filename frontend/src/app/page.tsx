import Header from '@/components/includes/header'
import Posts from '@/components/posts'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center gap-10 py-5'>
        <Posts />
      </main>
    </>
  )
}

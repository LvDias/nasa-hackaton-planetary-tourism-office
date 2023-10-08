import Header from '@/components/includes/header'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'

export default async function Post({ params }: { params: { slug: string } }) {
  let json = await axios({
    method: 'get',
    url: `${process.env.URL}/posts/${params.slug}`,
  })

  let planet = await json.data.planet
  let image = await json.data.img
  let description = await json.data.description

  return (
    <>
      <Header />
      <main className='flex flex-col items-center gap-10 py-5'>
        <div className='hidden md:flex w-full h-36 bg-cover bg-center bg-[url(/assets/space.png)]' />
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-lg p-5'>
          <div className='flex flex-col gap-10 md:col-span-2'>
            <div
              style={{ backgroundImage: `url(${image})` }}
              className='aspect-square bg-[#D9D9D9] rounded-lg bg-cover bg-center'
            />
            <div className='flex flex-col gap-5 '>
              <div className='p-5 bg-[#D9D9D9]'>
                {(() => {
                  if (planet[0].distance_light_year > 2)
                    return moment().add(600, 'days').calendar()
                  return moment().add(300, 'days').calendar()
                })()}
              </div>
              <div className='p-5 bg-[#D9D9D9]'>
                ${' '}
                {(() => {
                  if (planet[0].distance_light_year > 1) {
                    return planet[0].distance_light_year * 365 * 10.0
                  }

                  return 365 * 10.0
                })()}
              </div>
              <div className='p-5 bg-[#D9D9D9]'>
                {planet[0].distance_light_year} light-years
              </div>
              <Link
                href='/purchase'
                className='p-5 bg-green-500 text-white text-center'
              >
                Comprar
              </Link>
            </div>
          </div>
          <p className='md:col-span-3'>{description}</p>
        </div>
      </main>
    </>
  )
}

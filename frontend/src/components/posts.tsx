import axios from 'axios'
import Link from 'next/link'

export interface IPosts {
  name: string
}

export default async function Posts() {
  let json = await axios({
    method: 'get',
    url: `${process.env.URL}/posts`,
  })

  let planets = await json.data.planets
  let images = await json.data.img

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 max-w-screen-md w-full p-5'>
      {planets.map((post: IPosts, index: number) => {
        return (
          <Post
            key={index}
            href={post.name}
            title={post.name}
            img={images[index]}
          />
        )
      })}
    </div>
  )
}

export interface IPost {
  title: string
  img: string
  href: string
}

export function Post({ title, img, href }: IPost) {
  return (
    <Link href={href} className='flex flex-col gap-2.5 cursor-pointer'>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className='aspect-[4/3] rounded-lg bg-[#D9D9D9] bg-cover bg-center'
      ></div>
      <h2 className='text-center'>{title}</h2>
    </Link>
  )
}

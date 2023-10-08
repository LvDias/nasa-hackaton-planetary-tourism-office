import axios from 'axios'

export default async function Get(name: string) {
  let json = await axios({
    method: 'get',
    url: `https://images-api.nasa.gov/search?q=planet ${name}&media_type=image`,
  })

  let response = await json.data

  return response
}

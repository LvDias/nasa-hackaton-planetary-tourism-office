import axios from 'axios'

export async function GetAll() {
  let json = await axios({
    method: 'get',
    url: 'https://api.api-ninjas.com/v1/planets?min_distance_light_year=0&max_distance_light_year=5',
    headers: {
      'X-Api-Key': process.env.API_NINJAS,
    },
  })

  let response = await json.data

  return response
}

export async function Get(props: { name: string }) {
  let json = await axios({
    method: 'get',
    url: `https://api.api-ninjas.com/v1/planets?name=${props.name}`,
    headers: {
      'X-Api-Key': process.env.API_NINJAS,
    },
  })

  let response = await json.data

  return response
}

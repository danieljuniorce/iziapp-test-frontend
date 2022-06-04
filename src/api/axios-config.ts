import axios from 'axios'

const baseURL = 'https://pokeapi.co/'

const Axios = () => {
  const headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const Axios = axios.create({
    baseURL: baseURL,
    timeout: 16000,
    headers,
  })

  Axios.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      return error
    }
  )

  return Axios
}

export { Axios }
export default Axios

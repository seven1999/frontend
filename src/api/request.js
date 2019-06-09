import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5000'
    : location.origin + '/atp'

const request = axios.create({
  baseURL,
  timeout: 5000,
  // headers: { 'content-type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
  headers: {
    // 'content-type': 'application/x-www-form-urlencoded'
    // 'content-type': 'text/plain'
    'content-type': 'application/json'
  }
  // withCredentials: true
})

export default request

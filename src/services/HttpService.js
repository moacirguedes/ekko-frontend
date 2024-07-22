import axios from 'axios'

const HttpService= axios.create({
  baseURL: 'http://localhost:9804/api/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default HttpService
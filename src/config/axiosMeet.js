import axios from 'axios'

const AxiosMeet = axios.create({
    baseURL: 'http://localhost:5001'
})

export default AxiosMeet
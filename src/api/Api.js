//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    
    // baseURL: 'http://backend-griyashop.dev.com/api',
    // baseURL: 'http://127.0.0.1:8000/api',
    baseURL: 'https://backend-onlinestore.creazylab.id/api',

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default Api
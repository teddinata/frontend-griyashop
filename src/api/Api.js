//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://backend-griyashop.test/api'
    // baseURL: 'https://backend-onlinestore.creazylab.id/api'
})

export default Api
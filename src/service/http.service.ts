import axios from 'axios'
import { toast } from 'react-toastify'

const http = axios.create()

http.interceptors.request.use(
    async function (config) {
        return config
    },
    function (error) {
        // console.log('http.service->request.interceptor.onRejected', )
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    function (response) {
        // console.log('http.service.response.interceptor.onFulfilled')
        return response
    },
    function (error) {
        // console.log('http.service.response.interceptor.onRejected')
        const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500
        if (!expectedErrors) {
            console.error(error)
            console.error(error?.response?.data?.error)
            toast.error('Something went wrong. Try later...')
        }
        return Promise.reject(error)
    })

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    patch: http.patch,
    delete: http.delete,
}

export default httpService
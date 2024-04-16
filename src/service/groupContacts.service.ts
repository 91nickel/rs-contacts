import httpService from './http.service'
const entrypoint = 'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json'

const service = {
    get: async () => {
        const {data} = await httpService.get(entrypoint)
        return data
    },
}

export default service

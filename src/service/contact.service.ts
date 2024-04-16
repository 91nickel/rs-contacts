import httpService from './http.service'
const entrypoint = 'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json'

const service = {
    get: async () => {
        const {data} = await httpService.get(entrypoint)
        return data
    },
}

export default service

import { ContactDto } from 'src/types/dto/ContactDto'

const ENTRYPOINT = 'https://fs.gcfiles.net/fileservice/file/download'

enum Endpoints {
    get = '/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json'
}

const service = {
    fetch: function (): Promise<ContactDto[]> {
        return fetch(`${ENTRYPOINT}${Endpoints.get}`)
            .then(res => res.json())
    }
}

export default service

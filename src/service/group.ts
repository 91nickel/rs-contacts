import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const ENTRYPOINT = 'https://fs.gcfiles.net/fileservice/file/download'

enum Endpoints {
    get = '/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json'
}

const service = {
    fetch: function (): Promise<GroupContactsDto[]> {
        return fetch(`${ENTRYPOINT}${Endpoints.get}`)
            .then(res => res.json())
    }
}

export default service

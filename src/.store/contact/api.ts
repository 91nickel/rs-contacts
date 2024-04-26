import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'
import ReducersList from 'src/store/reducers.list'

const SLICE_NAME = ReducersList.contacts

const ENTRYPOINT = 'https://fs.gcfiles.net/fileservice/file/download'

enum Endpoints {
    getContact = '/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json'
}

export default createApi({
    reducerPath: SLICE_NAME,
    baseQuery: fetchBaseQuery({
        baseUrl: ENTRYPOINT
    }),
    endpoints(builder) {
        return {
            getContact: builder.query<ContactDto[], void>({
                query: () => ({url: Endpoints.getContact})
            })
        }
    }
})

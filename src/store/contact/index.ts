import { ContactDto } from 'src/types/dto/ContactDto'
import ReducersList from 'src/store/reducers.list'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const SLICE_NAME = ReducersList.contacts

const slice = createApi({
    reducerPath: SLICE_NAME,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fs.gcfiles.net/fileservice/file/download',
    }),
    endpoints(builder) {
        return {
            getContact: builder.query<ContactDto[], void>({
                query: () => ({url: '/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json'})
            })
        }
    }
})

export const {useGetContactQuery} = slice

export default {slice}

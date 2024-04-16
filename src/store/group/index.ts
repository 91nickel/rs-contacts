import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import ReducersList from 'src/store/reducers.list'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const SLICE_NAME = ReducersList.groupContacts

const slice = createApi({
    reducerPath: SLICE_NAME,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fs.gcfiles.net/fileservice/file/download',
    }),
    endpoints(builder) {
        return {
            getGroupContacts: builder.query<GroupContactsDto[], void>({
                query: () => ({url: '/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json'})
            })
        }
    }
})

export const {useGetGroupContactsQuery} = slice

export default {slice}

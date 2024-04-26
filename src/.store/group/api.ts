import ReducersList from 'src/store/reducers.list'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const SLICE_NAME = ReducersList.groupContacts

export default createApi({
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


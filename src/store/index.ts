import { ContactDto } from 'src/types/dto/ContactDto'
import {makeAutoObservable} from 'mobx'

const contacts: Array<ContactDto> = []

export const store = {
    contacts,
    groupContacts: {},
    favourites: {},
    filter: {},
    auth: {},

}

export default store

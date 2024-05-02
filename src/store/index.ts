import { ContactDto } from 'src/types/dto/ContactDto'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { makeAutoObservable, action } from 'mobx'
import { FilterFormValues } from 'src/components/FilterForm'
import StoreList from './store.list'
import contactStore from './contact'
import groupStore from './group'
import favouriteStore from './favourite'
import filterStore from './filter'

const contacts: Array<ContactDto> = DATA_CONTACT
const groupContacts: Array<GroupContactsDto> = DATA_GROUP_CONTACT
const favourites: string[] = []
const filter: Partial<FilterFormValues> = {}
const auth = {}


export const store = makeAutoObservable({
    // contacts,
    // groupContacts,
    // favourites,
    // filter,
    auth,
    checkAuth: function () {
        console.log('checkAuth()')
        return true
    },
    correctAuth: function () {
        console.log('correctAuth()')
    },
    incorrectAuth: function () {
        console.log('incorrectAuth()')
    },
    logout: function () {
        console.log('logout()')
    },
})

export const actions = {
    asyncFunction: action(async function () {
        console.log('asyncFunction()')
    })
}

export const newStore = {
    [StoreList.contacts]: contactStore,
    [StoreList.groups]: groupStore,
    [StoreList.favourites]: favouriteStore,
    [StoreList.filter]: filterStore,
}

export { StoreList }

export default store

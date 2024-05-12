import { action } from 'mobx'
import StoreList from './store.list'
import contactStore from './contact'
import groupStore from './group'
import favouriteStore from './favourite'
import filterStore from './filter'
import authStore from './auth'

const store = {
    [StoreList.contacts]: contactStore,
    [StoreList.groups]: groupStore,
    [StoreList.favourites]: favouriteStore,
    [StoreList.filter]: filterStore,
    [StoreList.auth]: authStore,
}

export const actions = {
    asyncFunction: action(async function () {
        console.log('asyncFunction()')
    })
}

export { StoreList, store }

export default store

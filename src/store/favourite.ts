import { action, computed, flow, makeObservable, observable } from 'mobx'
import { ContactDto } from 'src/types/dto/ContactDto'

class Store {
    @observable data: ContactDto['id'][] = []
    @observable isLoading: boolean = false

    constructor() {
        makeObservable(this)
    }

    @action
    add(id: ContactDto['id']) {
        // console.log('addContactToFavourites()', id, this)
        this.data = [...this.data, id]
    }

    @action
    remove(id: ContactDto['id']) {
        // console.log('removeContactFromFavourites()', id, this)
        this.data = this.data.filter(fid => fid !== id)
    }

}

const store = new Store()

export default store

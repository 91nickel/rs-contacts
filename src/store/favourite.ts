import { action, computed, flow, makeObservable, observable } from 'mobx'
import { ContactDto } from 'src/types/dto/ContactDto'

class Store {
    data: ContactDto['id'][] = []

    constructor() {
        makeObservable(
            this,
            {
                data: observable,
                add: action,
                remove: action,
            }
        )
    }

    add(id: ContactDto['id']) {
        console.log('addContactToFavourites()', id, this)
        this.data = [...this.data, id]
    }

    remove(id: ContactDto['id']) {
        console.log('removeContactFromFavourites()', id, this)
        this.data = this.data.filter(fid => fid !== id)
    }

}

const store = new Store()

export default store

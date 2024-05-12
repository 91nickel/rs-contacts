import { computed, flow, makeObservable, observable } from 'mobx'
import { ContactDto } from 'src/types/dto/ContactDto'
import service from 'src/service'

class Store {
    data: ContactDto[] = []
    isLoading: boolean = false

    constructor() {
        makeObservable(
            this,
            {
                data: observable,
                isLoading: observable,
                count: computed,
                fetch: flow,
            }
        )
    }

    get count() {
        return this.data.length
    }

    * fetch() {
        this.isLoading = true
        this.data = yield service.contact.fetch()
        this.isLoading = false
    }
}

const store = new Store()
store.fetch()

export default store
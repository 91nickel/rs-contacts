import { computed, flow, makeObservable, observable } from 'mobx'
import service from 'src/service'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

class Store {
    data: GroupContactsDto[] = []
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
        this.data = yield service.group.fetch()
        this.isLoading = false
    }
}

const store = new Store()
store.fetch()

export default store
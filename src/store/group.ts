import { computed, flow, makeObservable, observable } from 'mobx'
import service from 'src/service'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

class Store {
    @observable data: GroupContactsDto[] = []
    @observable isLoading: boolean = false

    constructor() {
        makeObservable(this)
    }

    @computed
    get count() {
        return this.data.length
    }

    @flow
    * fetch() {
        this.isLoading = true
        this.data = yield service.group.fetch()
        this.isLoading = false
    }
}

const store = new Store()
store.fetch()

export default store
import { action, computed, flow, makeAutoObservable, makeObservable, observable } from 'mobx'
import { FilterFormValues } from 'src/components/FilterForm'

class Store {
    data: Partial<FilterFormValues> = {}

    constructor() {
        makeAutoObservable(this)
    }

    update(formValues: Partial<FilterFormValues>) {
        console.log(this)
        this.data = {...this.data, ...formValues}
    }

    clear() {
        console.log(this.data)
        this.data = {}
    }

}

const store = new Store()

export default store
import { makeObservable, computed, flow, observable, makeAutoObservable } from 'mobx'
import service from 'src/service'
import { INITIAL_TOKEN_VALUE } from 'src/service/auth/const'
import { ILoginDto } from 'src/.store/auth/const'

class Store {
    accessToken = localStorage.getItem('accessToken') || INITIAL_TOKEN_VALUE
    refreshToken = localStorage.getItem('refreshToken') || INITIAL_TOKEN_VALUE
    isLoading = false
    error = ''
    isAuthenticated = false

    constructor() {
        makeAutoObservable(this)
    }

    * check() {
        console.log('check()')
        const data: boolean = yield service.auth.check(this.accessToken)
        console.log(data)
    }

    * login(dto: ILoginDto) {
        console.log('login()')
        const data: Response = yield service.auth.login(dto)
        console.log(data)
    }

    * logout() {
        console.log('logout()')
        const data: boolean = yield service.auth.logout(this.accessToken)
        console.log(data)
    }

}

const store = new Store()
store.check()

export default store
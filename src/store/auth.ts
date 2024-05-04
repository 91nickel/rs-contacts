import { flow, makeObservable, observable } from 'mobx'
import { auth as AuthService } from 'src/service'
import { ILoginDto, IAuthTokens } from 'src/service/auth/const'
import { isSuccessResponse, Response } from 'src/types/response'

interface IStore {
    error?: string,
    isAuthenticated: boolean,
    isLoading: boolean,
    isInitiated: boolean,

    check(): Generator<Promise<boolean>, void, boolean>

    login(dto: ILoginDto): Generator<Promise<Response<IAuthTokens>>, void, Response<IAuthTokens>>

    logout(): Generator<boolean, void, boolean>
}

class Store implements IStore {

    private service = new AuthService()

    @observable isLoading = false
    @observable isAuthenticated = false
    @observable isInitiated = false
    @observable error = ''

    constructor() {
        makeObservable(this)
    }

    @flow
    * check() {
        try {
            this.isLoading = true
            this.isAuthenticated = yield this.service.check()
        } catch (e: any) {
            console.log(e.message)
            this.error = e.message
            this.isAuthenticated = false
        } finally {
            this.isInitiated = true
            this.isLoading = false
        }
    }

    @flow
    * login(dto: ILoginDto) {
        if (this.isAuthenticated)
            return console.log('Authenticated')

        try {
            this.error = ''
            this.isLoading = true

            const response: Response<IAuthTokens> = yield this.service.login(dto)

            if (isSuccessResponse(response)) {
                this.isAuthenticated = response.success
            } else {
                if (response.message)
                    this.error = response.message
            }
        } catch (e: any) {
            console.log(this.error)
            this.error = e.message
        } finally {
            this.isLoading = false
        }
    }

    @flow
    * logout() {
        if (!this.isAuthenticated)
            return console.log('Not authenticated')

        try {
            this.isLoading = true
            this.isAuthenticated = yield !this.service.logout()
        } catch (e: any) {
            console.log(e.message)
            this.error = e.message
        } finally {
            this.isLoading = false
        }
    }

}

const store = new Store()

export default store
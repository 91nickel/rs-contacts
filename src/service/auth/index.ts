import { isSuccessResponse, Response } from 'src/types/response'
import {
    AuthErrors,
    IAuthTokens,
    ILoginDto,
    ACCESS_TOKEN_VAR_NAME,
    REFRESH_TOKEN_VAR_NAME,
    TEST_ACCESS_TOKEN,
    TEST_REFRESH_TOKEN,
    testAuthCredentials, INITIAL_TOKEN_VALUE,
} from './const'

class Service {

    private [ACCESS_TOKEN_VAR_NAME] = localStorage.getItem(ACCESS_TOKEN_VAR_NAME) || INITIAL_TOKEN_VALUE
    private [REFRESH_TOKEN_VAR_NAME] = localStorage.getItem(REFRESH_TOKEN_VAR_NAME) || INITIAL_TOKEN_VALUE

    setTokens(dto: IAuthTokens): void {
        this[ACCESS_TOKEN_VAR_NAME] = dto[ACCESS_TOKEN_VAR_NAME]
        this[REFRESH_TOKEN_VAR_NAME] = dto[REFRESH_TOKEN_VAR_NAME]
        localStorage.setItem(ACCESS_TOKEN_VAR_NAME, dto[ACCESS_TOKEN_VAR_NAME])
        localStorage.setItem(REFRESH_TOKEN_VAR_NAME, dto[REFRESH_TOKEN_VAR_NAME])
    }

    clearTokens(): void {
        this[ACCESS_TOKEN_VAR_NAME] = ''
        this[REFRESH_TOKEN_VAR_NAME] = ''
        localStorage.removeItem(ACCESS_TOKEN_VAR_NAME)
        localStorage.removeItem(REFRESH_TOKEN_VAR_NAME)
    }

    async login(dto: ILoginDto): Promise<Response<IAuthTokens>> {
        const isSuccess = dto === testAuthCredentials
        return await new Promise((res, rej) => {
            setTimeout(() => {
                console.log('auth', isSuccess)
                if (isSuccess) {
                    const result = {
                        success: true,
                        data: {accessToken: TEST_ACCESS_TOKEN, refreshToken: TEST_REFRESH_TOKEN},
                    }
                    this.setTokens(result.data)
                    res(result)
                } else {
                    rej(new Error(AuthErrors.forbidden))
                }
            }, 500)
        })
    }

    async check(): Promise<boolean> {
        const token = this[ACCESS_TOKEN_VAR_NAME]
        const isSuccess = token === TEST_ACCESS_TOKEN
        if (!token) {
            // console.log('check', false, 'no token')
            return false
        }

        return await new Promise((res, rej) => {
            setTimeout(() => {
                // console.log('check', isSuccess)
                isSuccess ? res(isSuccess) : rej(new Error(AuthErrors.internalServerError))
            }, 500)
        })
    }

    async logout(): Promise<boolean> {
        const token = this[ACCESS_TOKEN_VAR_NAME]

        const isSuccess = true

        if (!token) {
            return true
        }

        return await new Promise((res, rej) => {
            setTimeout(() => {
                if (isSuccess) {
                    this.clearTokens()
                    res(isSuccess)
                } else {
                    rej(new Error(AuthErrors.internalServerError))
                }
            }, 500)
        })
    }
}

export default Service


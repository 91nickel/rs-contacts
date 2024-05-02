import { isSuccessResponse, Response } from 'src/types/response'
import {
    AuthErrors,
    IAuthResponseData,
    ILoginDto,
    TEST_ACCESS_TOKEN,
    TEST_REFRESH_TOKEN,
    testAuthCredentials
} from './const'


const service = {

    login(dto: ILoginDto): Promise<Response<IAuthResponseData>> {
        const isSuccess = dto === testAuthCredentials
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('auth', isSuccess)
                isSuccess
                    ? res({success: true, data: {accessToken: TEST_ACCESS_TOKEN, refreshToken: TEST_REFRESH_TOKEN}})
                    : rej({success: false, message: AuthErrors.forbidden})
            }, 500)
        })
    },

    check(token: string): Promise<boolean> | boolean {
        const isSuccess = token === TEST_ACCESS_TOKEN
        if (!token) {
            console.log('check', false, 'no token')
            return false
        }

        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('check', isSuccess)
                isSuccess ? res(isSuccess) : rej(isSuccess)
            }, 500)
        })
    },

    logout(token: string): Promise<boolean> | boolean {
        const isSuccess = true

        if (!token) {
            console.log('logout', false, 'no token')
            return false
        }

        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('logout', isSuccess)
                isSuccess ? res(isSuccess) : rej(isSuccess)
            }, 500)
        })
    },

}

export default service


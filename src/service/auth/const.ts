export const ACCESS_TOKEN_VAR_NAME = 'accessToken'
export const REFRESH_TOKEN_VAR_NAME = 'refreshToken'
export const INITIAL_TOKEN_VALUE = ''
export const TEST_ACCESS_TOKEN = '1234'
export const TEST_REFRESH_TOKEN = '5678'

export const testAuthCredentials: ILoginDto = {
    login: 'login',
    password: '1234',
}

export enum AuthErrors {
    forbidden = '403 Forbidden',
    internalServerError = '500 Internal Server Error',
}

export interface IAuthTokens {
    [ACCESS_TOKEN_VAR_NAME]: string,
    [REFRESH_TOKEN_VAR_NAME]: string,
}

export interface ILoginDto {
    login: string,
    password: string,
}

export enum AuthErrors {
    forbidden = '403 Forbidden',
}

export interface IAuthResponseData {
    accessToken: string,
    refreshToken: string,
}

export interface IState {
    accessToken: string,
    refreshToken: string,
    error?: string,
    isAuthenticated: boolean,
    isLoading: boolean,
}

export interface ILoginDto {
    login: string,
    password: string,
}

export const INITIAL_TOKEN_VALUE = ''
export const TEST_ACCESS_TOKEN = '1234'
export const TEST_REFRESH_TOKEN = '5678'

export const testAuthCredentials: ILoginDto = {
    login: 'login',
    password: '1234',
}

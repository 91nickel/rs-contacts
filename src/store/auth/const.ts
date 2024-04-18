import ReducersList from 'src/store/reducers.list'

export const name = ReducersList.auth

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

export type IAuthResponseData = Pick<IState, 'accessToken' | 'refreshToken'>



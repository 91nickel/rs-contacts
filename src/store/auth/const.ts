import ReducersList from 'src/store/reducers.list'

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

export const name = ReducersList.auth

export const testAuthCredentials: ILoginDto = {
    login: 'login',
    password: '1234',
}

export const INITIAL_TOKEN_VALUE = '';
export const TEST_ACCESS_TOKEN = '1234';
export const TEST_REFRESH_TOKEN = '5678';


export interface SuccessResponse<T> {
    success: true,
    data?: T,
}

export interface ErrorResponse {
    success: false,
    message?: string
}

export type Response<T = never> = ErrorResponse | SuccessResponse<T>

export function isSuccessResponse<T>(res: Response<T>): res is SuccessResponse<T> {
    return res.success
}

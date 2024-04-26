import { AnyAction, Middleware } from 'redux'
import { logAction } from "../metrics/logAction";
import { AppState } from ".";

export const logActionMiddleware: Middleware<{}, AppState> = (storeAPI) => {
    return function wrapDispatch(next) {
        return function handleAction(action: AnyAction) {
            logAction(action);
            next(action);
        }
    }
}

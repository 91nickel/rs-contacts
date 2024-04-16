import { Middleware } from "redux";
import { logAction } from "../metrics/logAction";
import { AppActions } from "./actions";
import { AppState } from ".";

export const logActionMiddleware: Middleware<{}, AppState> = (storeAPI) => {
    return function wrapDispatch(next) {
        return function handleAction(action: AppActions) {
            logAction(action);
            next(action);
        }
    }
}

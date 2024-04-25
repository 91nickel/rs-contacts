import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction, Dispatch } from 'redux'
import { AppState } from 'src/store/index'

// export const useAppDispatch = useDispatch<Dispatch<AppActions>>;
export const useAppDispatch = useDispatch<ThunkDispatch<AppState, void, AnyAction>>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppStore = useStore<AppState>

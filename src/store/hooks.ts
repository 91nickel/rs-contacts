import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Dispatch } from 'redux'
import { AppActions } from 'src/store/actions'
import { AppState } from 'src/store/index'

// export const useAppDispatch = useDispatch<Dispatch<AppActions>>;
export const useAppDispatch = useDispatch<ThunkDispatch<AppState, void, AppActions>>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppStore = useStore<AppState>

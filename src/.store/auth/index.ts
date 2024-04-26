import { name, IState, testAuthCredentials } from './const'
import slice from './slice'

export default slice.reducer

export { name, testAuthCredentials }
export * from './action'
export type { IState }
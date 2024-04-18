import { name, IState } from './const'
import slice from './slice'

export default slice.reducer

export { name }
export * from './action'
export type { IState }
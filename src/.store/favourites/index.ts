import { name, ContactDto } from './const'

import slice from './slice'
import selector from './selector'
import action from './action'

export type { ContactDto }

export { name, action, selector, slice }

export default slice.reducer

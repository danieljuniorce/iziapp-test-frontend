import { combineReducers } from 'redux'
import { store } from '../store'

import themeReducer from './theme/theme'

const rootReducer = combineReducers({
  theme: themeReducer,
})

export type RootState = ReturnType<typeof store.getState>

export default rootReducer

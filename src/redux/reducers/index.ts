import { combineReducers } from 'redux'
import { store } from '../store'

import themeReducer from './theme/theme'
import favoriteReducer from './favorite/favorite'

const rootReducer = combineReducers({
  theme: themeReducer,
  favorite: favoriteReducer,
})

export type RootState = ReturnType<typeof store.getState>

export default rootReducer

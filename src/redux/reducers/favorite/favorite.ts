import { createSlice } from '@reduxjs/toolkit'

export type InitialStateFavoriteProps = {
  favorite?: [number]
}

const initialState: InitialStateFavoriteProps = {}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => console.log(action.payload),
    removeFavorite: (state, action) => {},
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer

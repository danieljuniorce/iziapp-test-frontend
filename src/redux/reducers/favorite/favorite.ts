import { createSlice } from '@reduxjs/toolkit'

export type InitialStateFavoriteProps = {
  favorite: Array<{
    id: number
    name: string
  }>
}

const initialState: InitialStateFavoriteProps = {
  favorite: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorite?.length > 0) {
        state.favorite = [...action.payload]
      } else {
        state.favorite = [...action.payload]
      }
    },

    removeFavorite: (state, action) => {
      state.favorite = [
        ...state!.favorite.filter((favorite) => favorite.id !== action.payload),
      ]
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

type IThemeProps = { theme: 'dark' | 'light' }

const initialState: IThemeProps = { theme: 'dark' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer

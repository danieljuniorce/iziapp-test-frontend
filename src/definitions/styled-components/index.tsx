import { Moon, Sun } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'

import { changeTheme } from '../../redux/reducers/theme/theme'
import { RootState } from '../../redux/reducers'
import light from './light'
import dark from './dark'
import { memo, useCallback } from 'react'

function ChangeTheme() {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme?.theme)
  const cssTheme = getTheme()

  const _changeTheme = useCallback(() => {
    dispatch(changeTheme())
  }, [dispatch, cssTheme, theme])

  return (
    <button
      style={{
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        transition: 'ease 0.5s',
      }}
      onClick={_changeTheme}
    >
      {theme === 'dark' ? (
        <Moon size={24} color={cssTheme.colors.textColorSecondary} />
      ) : (
        <Sun size={24} color={cssTheme.colors.textColorSecondary} />
      )}
    </button>
  )
}

function getTheme() {
  const theme = useSelector((state: RootState) => state.theme?.theme)

  return theme === 'dark' ? dark : light
}

export { ChangeTheme, getTheme }

export default memo(ChangeTheme)

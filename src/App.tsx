import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import AppNavigation from './navigation/app-navigation'
import { RootState } from './redux/reducers'
import dark from './definitions/styled-components/dark'
import light from './definitions/styled-components/light'
import GlobalStyled from './styles/globalStyled'

function App() {
  const theme = useSelector((state: RootState) => state.theme?.theme)

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyled />
      <AppNavigation />
    </ThemeProvider>
  )
}

export default App

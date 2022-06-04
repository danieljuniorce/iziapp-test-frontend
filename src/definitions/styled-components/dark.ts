import { DefaultTheme } from 'styled-components'

import common from './common'

const dark: DefaultTheme = {
  colors: {
    ...common.colors,
    backgroundPrimary: '#181818',
    backgroundSecondary: '#202020',
    textColorPrimary: '#FFFFFF',
    textColorSecondary: '#F5F5F5',
  },
}

export default dark

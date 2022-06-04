import { DefaultTheme } from 'styled-components'

import common from './common'

const light: DefaultTheme = {
  colors: {
    ...common.colors,
    backgroundPrimary: '#E5E5E5',
    backgroundSecondary: '#FFFFFF',
    textColorPrimary: '#212121',
    textColorSecondary: '#333333',
  },
}

export default light

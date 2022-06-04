import 'styled-components'

export type CommonColors =
  | 'transparent'
  | 'bluePattern'
  | 'bluePatternWithOpacity'
  | 'boxShadow'
  | 'indigo'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'gray'
  | 'white'

export type PatternColors =
  | CommonColors
  | 'backgroundPrimary'
  | 'backgroundSecondary'
  | 'textColorPrimary'
  | 'textColorSecondary'

declare module 'styled-components' {
  export interface BaseColors {
    colors: Record<CommonColors, string>
  }

  export interface DefaultTheme extends BaseColors {
    colors: Record<PatternColors, string>
  }
}

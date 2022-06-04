import styled, { css } from 'styled-components'

export type BadgesColorsProps = {
  indigo?: boolean
  blue?: boolean
  purple?: boolean
  pink?: boolean
  red?: boolean
  orange?: boolean
  yellow?: boolean
  green?: boolean
  teal?: boolean
  cyan?: boolean
  gray?: boolean
  white?: boolean
}

export const Container = styled.div<BadgesColorsProps>`
  width: 120px;
  height: 30px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  ${({
    theme,
    blue,
    purple,
    red,
    orange,
    yellow,
    green,
    teal,
    cyan,
    white,
  }) => {
    if (blue) {
      return css`
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
      `
    }

    if (purple) {
      return css`
        background-color: ${theme.colors.purple};
        color: ${theme.colors.white};
      `
    }

    if (red) {
      return css`
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};
      `
    }

    if (orange) {
      return css`
        background-color: ${theme.colors.orange};
        color: ${theme.colors.white};
      `
    }

    if (yellow) {
      return css`
        background-color: ${theme.colors.yellow};
        color: color: #212121;
      `
    }

    if (green) {
      return css`
        background-color: ${theme.colors.green};
        color: ${theme.colors.white};
      `
    }

    if (teal) {
      return css`
        background-color: ${theme.colors.teal};
        color: ${theme.colors.white};
      `
    }

    if (cyan) {
      return css`
        background-color: ${theme.colors.cyan};
        color: ${theme.colors.white};
      `
    }

    if (white) {
      return css`
        background-color: ${theme.colors.white};
        color: #212121;
      `
    }

    return css`
      background-color: ${theme.colors.indigo};
      color: ${theme.colors.white};
    `
  }}
`

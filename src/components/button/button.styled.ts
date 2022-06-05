import styled, { css } from 'styled-components'

export type ColorsProps = {
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

export const Container = styled.button<ColorsProps>`
  width: 100%;
  height: 46px;
  padding: 0 20px;
  border-radius: 6px;
  border: 0;

  font-size: 14px;
  font-weight: 500;

  ${({ theme, indigo, blue, purple, cyan, yellow, green, teal }) => {
    if (indigo) {
      return css`
        background-color: ${theme.colors.indigo};
        color: ${theme.colors.white};
      `
    }

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

    if (cyan) {
      return css`
        background-color: ${theme.colors.cyan};
        color: ${theme.colors.white};
      `
    }

    if (yellow) {
      return css`
        background-color: ${theme.colors.yellow};
        color: #212121;
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

    return css`
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
    `
  }}

  cursor: pointer;
`

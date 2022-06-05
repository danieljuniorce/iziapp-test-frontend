import styled, { css } from 'styled-components'
import { PokemonTypesProps } from '../../interface/pokemon'

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

  typePokemon?: PokemonTypesProps
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
    typePokemon,
    indigo,
  }) => {
    if (blue || typePokemon === 'ice' || typePokemon === 'water') {
      return css`
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
      `
    }

    if (purple || typePokemon === 'ghost' || typePokemon === 'shadow') {
      return css`
        background-color: ${theme.colors.purple};
        color: ${theme.colors.white};
      `
    }

    if (
      red ||
      typePokemon === 'fairy' ||
      typePokemon === 'rock' ||
      typePokemon === 'poison'
    ) {
      return css`
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};
      `
    }

    if (orange || typePokemon === 'fire') {
      return css`
        background-color: ${theme.colors.orange};
        color: ${theme.colors.white};
      `
    }

    if (yellow || typePokemon === 'normal' || typePokemon === 'electric') {
      return css`
        background-color: ${theme.colors.yellow};
        color: #212121;
      `
    }

    if (green || typePokemon === 'grass') {
      return css`
        background-color: ${theme.colors.green};
        color: ${theme.colors.white};
      `
    }

    if (teal || typePokemon === 'bug') {
      return css`
        background-color: ${theme.colors.teal};
        color: ${theme.colors.white};
      `
    }

    if (cyan || typePokemon === 'fighting') {
      return css`
        background-color: ${theme.colors.cyan};
        color: ${theme.colors.white};
      `
    }

    if (
      white ||
      typePokemon === 'flying' ||
      typePokemon === 'unknown' ||
      typePokemon === 'steel' ||
      typePokemon === 'ground'
    ) {
      return css`
        background-color: ${theme.colors.white};
        color: #212121;
      `
    }

    if (indigo || typePokemon === 'psychic' || typePokemon === 'dragon') {
      return css`
        background-color: ${theme.colors.white};
        color: #212121;
      `
    }

    return css`
      background-color: #000000;
      color: #ffffff;
    `
  }}
`

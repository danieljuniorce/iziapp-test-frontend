import styled, { css } from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary}6B;
  `}

  @media only screen and (max-width: 992px) {
    overflow-x: scroll;
  }
`

export const TitleHeader = styled.div`
  padding: 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary} !important;
  `}
`

export const TitleHeaderText = styled.h1`
  font-size: 24px;
  font-weight: 500;
`

export const Content = styled.table`
  padding: 20px 20px;

  @media only screen and (max-width: 992px) {
    padding: 10px 10px;
  }
`

export const Header = styled.thead`
  text-align: left;

  th {
    padding: 10px 15px;
  }

  @media only screen and (max-width: 992px) {
    th {
      padding: 5px 5px;
    }
  }
`

export const Body = styled.tbody`
  td {
    padding: 10px 15px;
  }

  @media only screen and (max-width: 992px) {
    td {
      padding: 5px 5px;
    }
  }
`

export const Divider = styled.tr`
  position: relative;
`

export const ContentImagePokemon = styled.div`
  padding: 10px;
  border-radius: 8px;

  position: relative;

  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 500ms;

  svg {
    z-index: 4;
    display: none;
    position: absolute;
    margin: auto;
  }

  &:hover {
    svg {
      display: flex;
      width: 25px;
      height: 25px;

      filter: drop-shadow(5px 5px 5px #222);
    }

    ${({ theme }) => css`
      background-color: ${theme.colors.red}99;
    `}
  }

  cursor: pointer;
`

export const ImgPokemonInTable = styled.img`
  width: 50px;
  height: 50px;

  z-index: 1;
`

import styled, { css } from 'styled-components'

export const Container = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 600px;
  padding: 30px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
  `}
`

export const NamePokemon = styled.h1`
  margin-bottom: 10px;
`

export const ContentNextOrPrevious = styled.div`
  width: 100%;
  height: 60px;
  gap: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftPrevious = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 8px 0 0 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.red}D4;
  `}
`

export const LeftPreviousText = styled.div``

export const RightNext = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 0 8px 8px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.red}D4;
  `}
`

export const RightNextText = styled.div``

export const ImagePokemon = styled.img`
  width: 300px;
  padding: 20px;
  border-radius: 5px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray}33;
  `}
`

export const ListTypes = styled.ol`
  margin-top: 10px;
  margin-bottom: 10px;

  list-style: none;
  display: flex;
  gap: 5px;
`

export const ItemType = styled.li``

export const Weight = styled.span``

export const HeightPokemon = styled.span``

export const ListStats = styled.ul`
  list-style: none;
`

export const ItemStats = styled.li``

export const NameStats = styled.p``

export type ProgressStatsType = {
  type?:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special-attack'
    | 'special-attack'
    | 'speed'
    | 'accuracy'
    | 'evasion'
}

export const ProgressStats = styled.progress<ProgressStatsType>`
  width: 300px;
  border-radius: 8px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  [value]::-webkit-progress-bar {
    background-color: 'red';
  }
`

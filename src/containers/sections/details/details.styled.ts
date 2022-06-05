import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  border-radius: 8px;

  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
    box-shadow: ${theme.colors.boxShadow};
  `}
`

export const NamePokemon = styled.h1`
  margin-bottom: 10px;
`

export const ImagePokemon = styled.img`
  width: 260px;
  padding: 20px;
  border-radius: 5px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray}33;
  `}
`

export const Left = styled.div`
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  padding: 20px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray}4D;
  `}
`

export const InfoContainer = styled.div`
  border-radius: 8px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
`

export const InfoContent = styled.div`
  padding: 5px;
`

export const TitleInfo = styled.h5``

export const BodyInfo = styled.p``

export const ListTypes = styled.ol`
  margin-top: 10px;
  margin-bottom: 10px;

  list-style: none;
  display: flex;
  gap: 5px;
`

export const ItemType = styled.li``

export const ListStats = styled.ul`
  list-style: none;
`

export const ItemStats = styled.li`
  margin-bottom: 10px;
`

export const NameStats = styled.p``

export const ButtonPreviousOrNext = styled.div`
  padding: 20px;

  display: flex;
  justify-content: space-between;
`

export const ButtonClickForPage = styled(Link)`
  display: flex;
  align-items: center;
`

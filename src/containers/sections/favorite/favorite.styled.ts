import styled, { css } from 'styled-components'

export const Content = styled.div`
  padding: 20px 20px;
`

export const Title = styled.h1`
  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }
`

export const CardList = styled.div`
  margin-top: 20px;

  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (min-width: 200px) and (max-width: 520px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 520px) and (max-width: 780px) {
    grid-template-columns: 2fr;
  }

  @media screen and (min-width: 780px) and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 8px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
  `}
`

export const TitleCard = styled.h4`
  margin-bottom: 15px;
`

export const ImgCard = styled.img`
  width: 120px;
  height: 120px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray}33;
  `}
`

import styled, { css } from 'styled-components'
import { X } from 'react-feather'

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 15;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleHeader = styled.h1`
  font-size: 16px;
  font-weight: 600;
`

export const Content = styled.div`
  padding: 30px;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
  `}
`

export const Img = styled.img`
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ButtonContainer = styled.div``

export const AbilityContent = styled.div`
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
`

export const NameAbility = styled.p`
  margin-bottom: 5px;
`

export const Closed = styled(X).attrs({ size: 20 })`
  cursor: pointer;
`

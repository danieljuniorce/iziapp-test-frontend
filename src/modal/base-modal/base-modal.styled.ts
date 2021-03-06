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
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleHeader = styled.h1`
  width: 300px;

  font-size: 16px;
  font-weight: 600;

  @media only screen and (max-width: 992px) {
    width: 180px;
  }
`

export const Content = styled.div`
  padding: 30px;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
  `}

  @media only screen and (max-width: 992px) {
    width: 300px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 15px;
`

export const Closed = styled(X).attrs({ size: 20 })`
  cursor: pointer;
`

export const Message = styled.span``

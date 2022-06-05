import styled, { css } from 'styled-components'

export const Content = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray}33;
  `}
`

export const Img = styled.img`
  width: 300px;
  height: 300px;

  @media only screen and (max-width: 992px) {
    width: 180px;
    height: 180px;
  }
`

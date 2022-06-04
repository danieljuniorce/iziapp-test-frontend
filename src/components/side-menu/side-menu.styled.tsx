import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80px;

  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
  `}
`

export const Content = styled.ul`
  padding: 30px 0;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Items = styled(Link)`
  margin-bottom: 10px;
  padding: 14px;

  display: flex;
  gap: 10px;

  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.textColorSecondary};

    &:hover {
      border-radius: 8px;
      color: ${theme.colors.textColorSecondary}D4;
      background-color: ${theme.colors.textColorSecondary}1A;
    }
  `}
`

export const TextItems = styled.span`
  display: none;
`

export const Logo = styled.img.attrs({ src: logo })`
  width: 32px;
`

import { memo } from 'react'
import { Home, Star } from 'react-feather'
import { ChangeTheme } from '@definitions/styled-components'
import Tooltip from 'react-tooltip'
import { useLocation } from 'react-router-dom'

import { Container, Content, Items, Logo } from './side-menu.styled'

function SideMenu(): JSX.Element {
  const { pathname } = useLocation()

  const _verifyPathnameActive = () => {
    if (pathname === '/') {
      return 'home'
    }
    if (pathname === '/favorite') {
      return 'favorite'
    }
  }

  return (
    <Container>
      <Tooltip place="left" effect="solid" />

      <Content>
        <Items to="/" active={false}>
          <Logo />
        </Items>

        <Items
          to="/"
          data-tip="Home"
          active={_verifyPathnameActive() === 'home' ? true : false}
        >
          <Home />
        </Items>
        <Items
          to="/favorite"
          data-tip="Favorite"
          active={_verifyPathnameActive() === 'favorite' ? true : false}
        >
          <Star />
        </Items>

        <Items to="#" data-tip="Change Theme" active={false}>
          <ChangeTheme />
        </Items>
      </Content>
    </Container>
  )
}

export default memo(SideMenu)

import { memo } from 'react'
import { Home, Star } from 'react-feather'
import { ChangeTheme } from '../../definitions/styled-components'
import Tooltip from 'react-tooltip'

import { Container, Content, Items, TextItems, Logo } from './side-menu.styled'

function SideMenu(): JSX.Element {
  return (
    <Container>
      <Tooltip place="left" effect="solid" />

      <Content>
        <Items to="/">
          <Logo />
        </Items>

        <Items to="/" data-tip="Home">
          <Home />
        </Items>
        <Items to="/favorite" data-tip="Favorite">
          <Star />
        </Items>

        <Items to="#" data-tip="Change Theme">
          <ChangeTheme />
        </Items>
      </Content>
    </Container>
  )
}

export default memo(SideMenu)

import { Activity } from 'react-feather'

import {
  Container,
  Content,
  Header,
  TitleHeader,
  Img,
  ButtonContainer,
  AbilityContent,
  NameAbility,
  Closed,
} from './base-modal.styled'
import { Button } from '../../components'
import { forwardRef, memo, useCallback } from 'react'

export type BaseModalProps = {
  visible: boolean
  id: string | number
  name: string
  abilities: Array<{ ability: { name: string } }>
  img: string

  onClose: () => void
  onAddFavorite: () => void
}

function BaseModal({
  id,
  name,
  abilities,
  onClose,
  onAddFavorite,
  img,
  visible,
}: BaseModalProps) {
  const _onClose = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const _onAddFavorite = useCallback(() => {
    if (onAddFavorite) {
      onAddFavorite()
    }
  }, [onAddFavorite])

  if (!visible) {
    return null
  }

  return (
    <Container>
      <Content>
        <Header>
          <TitleHeader>
            #{id} {name}
          </TitleHeader>
          <Closed onClick={_onClose} />
        </Header>

        <Img src={img} alt={id + name} />

        {/* <AbilityContent>
          {abilities.map((abilitie, index) => (
            <>
              <Activity key={index} size={14} /> {abilitie.ability}
            </>
          ))}
        </AbilityContent> */}

        <ButtonContainer>
          <Button yellow onClick={_onAddFavorite}>
            Add favorite
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  )
}

export default memo(forwardRef(BaseModal))

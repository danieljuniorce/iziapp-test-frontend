import {
  Container,
  Content,
  Header,
  TitleHeader,
  ButtonContainer,
  Closed,
  Message,
} from './base-modal.styled'
import { Button } from '@components'
import { CSSProperties, forwardRef, memo, ReactNode, useCallback } from 'react'

export type BaseModalProps = {
  title?: string | null
  visible?: boolean
  buttonText?: string | null
  type?: 'success' | 'error' | 'info' | 'favorite'
  children?: ReactNode
  message?: string | null
  styles?: CSSProperties

  onClose: () => void
  onPress: () => void
}

function BaseModal({
  title,
  visible,
  onClose,
  buttonText,
  onPress,
  type,
  children,
  message,
  styles,
}: BaseModalProps) {
  const _onClose = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const _onPress = useCallback(() => {
    if (onPress) {
      onPress()
    }
  }, [onPress])

  if (!visible) {
    return null
  }

  return (
    <Container style={styles}>
      <Content>
        <Header>
          {title && <TitleHeader>{title}</TitleHeader>}
          <Closed onClick={_onClose} />
        </Header>

        {message && <Message>{message}</Message>}
        {children}
        <ButtonContainer>
          <Button
            green={type === 'success'}
            red={type === 'error'}
            blue={type === 'info'}
            yellow={type === 'favorite'}
            onClick={_onPress}
          >
            {buttonText}
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  )
}

export default memo(forwardRef(BaseModal))

import {
  memo,
  useCallback,
  useImperativeHandle,
  useState,
  Ref,
  forwardRef,
} from 'react'
import BaseModal from '@modal/base-modal/base-modal'

export type AlertProps = {
  onClose?: () => void
}

export type AlertRefProps =
  | {
      show: ({
        title,
      }: {
        title: string
        message: string
        buttonText: string
        type: 'success' | 'error' | 'info' | 'favorite'
      }) => void
    }
  | undefined

function Alert({ onClose }: AlertProps, ref: Ref<AlertRefProps>) {
  const [show, setShow] = useState<boolean>(false)
  const [title, setTitle] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [type, setType] = useState<'success' | 'error' | 'info' | 'favorite'>(
    'success'
  )
  const [buttonText, setButtonText] = useState<string | null>(null)

  useImperativeHandle(ref, () => ({
    show: (props) => {
      const { title, message, buttonText, type } = props
      setShow(true)

      setTitle(title)
      setType(type || 'success')
      setMessage(message)
      setButtonText(buttonText)
    },
  }))

  const _onClose = useCallback(() => {
    setShow(false)
    if (onClose) {
      onClose()
    }
  }, [onClose])

  return (
    <BaseModal
      styles={{ zIndex: 20 }}
      visible={show}
      onClose={_onClose}
      onPress={_onClose}
      title={title}
      message={message}
      buttonText={buttonText || 'ok'}
      type={type || 'success'}
    />
  )
}

export default memo(forwardRef(Alert))

import { ReactNode } from 'react'
import { Container, ColorsProps } from './button.styled'

export type ButtonProps = ColorsProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {}

function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>
}

export default Button

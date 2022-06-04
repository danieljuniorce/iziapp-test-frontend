import { memo, ReactNode } from 'react'

import { BadgesColorsProps, Container } from './badges.styled'

export type BadgesProps = BadgesColorsProps & {
  children: ReactNode
}

function Badges({ children, ...rest }: BadgesProps) {
  return <Container {...rest}>{children}</Container>
}

export default memo(Badges)

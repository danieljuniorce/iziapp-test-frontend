import { memo, ReactNode } from 'react'
import { PokemonTypesProps } from '../../interface/pokemon'
import { BadgesColorsProps, Container } from './badges.styled'

export type BadgesProps = BadgesColorsProps & {
  children: ReactNode
  typePokemon?: PokemonTypesProps
}

function Badges({ children, ...rest }: BadgesProps) {
  return <Container {...rest}>{children}</Container>
}

export default memo(Badges)

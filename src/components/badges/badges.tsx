import { memo, ReactNode } from 'react'
import { BadgesColorsProps, Container } from './badges.styled'
import { PokemonTypesProps } from '@interface/pokemon'

export type BadgesProps = BadgesColorsProps & {
  children: ReactNode
  typePokemon?: PokemonTypesProps
}

function Badges({ children, ...rest }: BadgesProps) {
  return <Container {...rest}>{children}</Container>
}

export default memo(Badges)

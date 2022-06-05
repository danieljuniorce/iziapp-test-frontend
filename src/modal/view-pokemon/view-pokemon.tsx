import { memo } from 'react'
import BaseModal, { BaseModalProps } from '../base-modal/base-modal'

import { Content, Img } from './view-pokemon.styled'

export type ViewPokemonProps = BaseModalProps & {
  img?: string
}

function ViewPokemon({ img, ...rest }: ViewPokemonProps) {
  return (
    <BaseModal {...rest}>
      <Content>
        <Img src={img!} alt={rest.title!} />
      </Content>
    </BaseModal>
  )
}

export default memo(ViewPokemon)

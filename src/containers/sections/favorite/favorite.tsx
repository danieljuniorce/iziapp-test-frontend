import { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Loading, Wrapper, SideMenu, Button } from '../../../components'
import Alert, { AlertRefProps } from '../../../modal/alert/alert'
import { RootState } from '../../../redux/reducers'
import { removeFavorite } from '../../../redux/reducers/favorite/favorite'
import { getImagePokemon } from '../../../utils'

import {
  Content,
  Card,
  CardList,
  ImgCard,
  Title,
  TitleCard,
} from './favorite.styled'

function Favorite() {
  const dispatch = useDispatch()
  const favorite = useSelector((state: RootState) => state.favorite?.favorite)
  const alertRef = useRef<AlertRefProps>()
  const [loading, setLoading] = useState<boolean>(false)

  const _removePokemonTheOfListFavorite = useCallback(
    (pokemonId: number) => {
      try {
        dispatch(removeFavorite(pokemonId))

        alertRef.current?.show({
          buttonText: 'Ok',
          type: 'success',
          title: 'Pokemon successfully removed ',
          message: 'The pokemon has been removed from your favorite.',
        })
      } catch (err) {
        alertRef.current?.show({
          buttonText: 'Closed',
          type: 'error',
          title: 'Ops!',
          message: 'Something went wrong.',
        })
      }
    },
    [dispatch, favorite]
  )

  const RenderPokemonListFavorite = () => {
    return (
      <CardList>
        {favorite &&
          favorite.map((favorite) => (
            <Card>
              <TitleCard>#{favorite.id + ' ' + favorite.name}</TitleCard>
              <ImgCard src={getImagePokemon(favorite.id)} />

              <Button
                red
                onClick={() => _removePokemonTheOfListFavorite(favorite.id)}
              >
                Remove Favorite
              </Button>
            </Card>
          ))}
      </CardList>
    )
  }

  return (
    <>
      <Loading visible={loading} />
      <SideMenu />
      <Wrapper>
        <Content>
          <Title>List Favorite Pokemon</Title>
          <RenderPokemonListFavorite />
        </Content>
      </Wrapper>

      <Alert ref={alertRef} />
    </>
  )
}

export default Favorite

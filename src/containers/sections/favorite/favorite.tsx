import { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
          favorite.map((favorite, index) => (
            <Card key={index}>
              <TitleCard>#{favorite.id + ' ' + favorite.name}</TitleCard>
              <Link to={`/details/${favorite.id}`}>
                <ImgCard src={getImagePokemon(favorite.id)} />
              </Link>

              <Button
                red
                onClick={() => _removePokemonTheOfListFavorite(favorite.id)}
              >
                Remove Favorite
              </Button>
            </Card>
          ))}

        {favorite.length === 0 &&
          'Not adding any pokemon to your favorites list.'}
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

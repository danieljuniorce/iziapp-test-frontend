import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Badges, SideMenu, Wrapper, Loading, Button } from '../../../components'
import { ChevronLeft, ChevronRight, Home } from 'react-feather'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import {
  Container,
  Content,
  ImagePokemon,
  NamePokemon,
  ItemType,
  ListTypes,
  Left,
  Right,
  BodyInfo,
  InfoContent,
  TitleInfo,
  InfoContainer,
  ButtonClickForPage,
  ButtonPreviousOrNext,
} from './details.styled'

import PokeApi, { InfoPokemonProps } from '../../../api/pokeapi'
import {
  firstLetterUppercase,
  verifyDuplicatePokemonInFavorite,
} from '../../../utils'
import { RootState } from '../../../redux/reducers'
import Alert, { AlertRefProps } from '../../../modal/alert/alert'
import {
  addFavorite,
  removeFavorite,
} from '../../../redux/reducers/favorite/favorite'

function Details({ match }: RouteComponentProps<{ id: string }>) {
  const dispatch = useDispatch()
  const favorite = useSelector((state: RootState) => state.favorite!.favorite)
  const alertRef = useRef<AlertRefProps>()

  const [loading, setLoading] = useState<boolean>(false)
  const [infoPokemon, setInfoPokemon] = useState<InfoPokemonProps>()
  const [favoriteOrNotFavorite, setFavoriteOrNotFavorite] =
    useState<boolean>(false)

  const _getIdForPreviousOrNextPage = useCallback(
    (identification: 'next' | 'previous') => {
      const idParseForInt = parseInt(match.params.id)

      if (identification === 'next') {
        return idParseForInt > 0 ? idParseForInt + 1 : idParseForInt
      } else {
        return idParseForInt > 1 ? idParseForInt - 1 : idParseForInt
      }
    },
    [match]
  )

  const _loadInfoPokemonPerId = useCallback(async () => {
    setLoading(true)
    try {
      const result = await PokeApi.infoPokemon(parseInt(match.params.id))

      setFavoriteOrNotFavorite(
        favorite.filter((favorite) => favorite.id === parseInt(match.params.id))
          ?.length > 0
      )

      setInfoPokemon(result!)

      setLoading(false)
    } catch (err) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [match, infoPokemon, setInfoPokemon, dispatch])

  const _addPokemonInListFavorite = useCallback(async () => {
    try {
      const newPokemonFavorite = verifyDuplicatePokemonInFavorite({
        id: infoPokemon!.id,
        name: infoPokemon!.name,
      })

      if (newPokemonFavorite.has) {
        alertRef.current!.show({
          buttonText: 'Ok',
          type: 'info',
          title: 'Hey!!',
          message: `Pokemon ${infoPokemon?.name} is already on your favorites list.`,
        })
        setFavoriteOrNotFavorite(true)
      } else {
        dispatch(addFavorite(newPokemonFavorite.value))
        alertRef.current!.show({
          buttonText: 'Ok',
          type: 'favorite',
          title: 'New pokemon in favorites',
          message: `The pokemon ${infoPokemon?.name} has been successfully added to your favorites list.`,
        })
        setFavoriteOrNotFavorite(true)
      }
    } catch (err) {
      alertRef.current!.show({
        buttonText: 'Close',
        type: 'error',
        title: 'Oops! Something went wrong.',
        message: `Didn't add pokemon to favorites.`,
      })
    }
  }, [dispatch, favorite, infoPokemon])

  const _removePokemonInListFavorite = useCallback(() => {
    try {
      dispatch(removeFavorite(match.params.id))

      alertRef.current?.show({
        buttonText: 'Ok',
        type: 'success',
        title: 'Pokemon successfully removed ',
        message: 'The pokemon has been removed from your favorite.',
      })
      setFavoriteOrNotFavorite(false)
    } catch (err) {
      alertRef.current?.show({
        buttonText: 'Closed',
        type: 'error',
        title: 'Ops!',
        message: 'Something went wrong.',
      })
    }
  }, [dispatch, match, favorite, alertRef, infoPokemon])

  useEffect(() => {
    _loadInfoPokemonPerId()
  }, [match])

  return (
    <>
      <Loading visible={loading} />
      <SideMenu />
      <Wrapper>
        <ButtonPreviousOrNext>
          <ButtonClickForPage
            to={`/details/${_getIdForPreviousOrNextPage('previous')}`}
          >
            <ChevronLeft />
            &nbsp; Previous
          </ButtonClickForPage>

          <ButtonClickForPage to="/">
            <Home />
            &nbsp; Go Back Home
          </ButtonClickForPage>
          <ButtonClickForPage
            to={`/details/${_getIdForPreviousOrNextPage('next')}`}
          >
            Next &nbsp;
            <ChevronRight />
          </ButtonClickForPage>
        </ButtonPreviousOrNext>
        <Container>
          <Content>
            {infoPokemon && (
              <>
                <Left>
                  <NamePokemon>
                    #{infoPokemon.id} {firstLetterUppercase(infoPokemon!.name)}
                  </NamePokemon>

                  <ImagePokemon
                    src={
                      infoPokemon!.sprites.other['official-artwork']
                        .front_default
                    }
                    alt={`image pokemon ${infoPokemon?.name}`}
                  />

                  <ListTypes>
                    {infoPokemon!.types.map(({ type }, index) => (
                      <ItemType key={index}>
                        <Badges typePokemon={type.name}>
                          {firstLetterUppercase(type.name)}
                        </Badges>
                      </ItemType>
                    ))}
                  </ListTypes>

                  {!favoriteOrNotFavorite && (
                    <Button yellow onClick={_addPokemonInListFavorite}>
                      Add Favorite
                    </Button>
                  )}
                  {favoriteOrNotFavorite && (
                    <Button red onClick={_removePokemonInListFavorite}>
                      Remove Favorite
                    </Button>
                  )}
                </Left>

                <Right>
                  <InfoContainer>
                    <InfoContent>
                      <TitleInfo>Height</TitleInfo>
                      <BodyInfo>
                        {infoPokemon?.height ? infoPokemon.height : '???.?'}m
                      </BodyInfo>
                    </InfoContent>

                    <InfoContent>
                      <TitleInfo>Weight</TitleInfo>
                      <BodyInfo>
                        {infoPokemon?.weight ? infoPokemon.weight : '???.?'}kg
                      </BodyInfo>
                    </InfoContent>

                    <InfoContent>
                      <TitleInfo>Abilities</TitleInfo>
                      <BodyInfo>
                        {infoPokemon?.abilities.map((ability) => {
                          if (ability.is_hidden) {
                            return firstLetterUppercase(ability.ability.name)
                          }
                        })}
                      </BodyInfo>
                    </InfoContent>

                    {infoPokemon.stats.map(({ stat, base_stat }) => (
                      <InfoContent>
                        <TitleInfo>{firstLetterUppercase(stat.name)}</TitleInfo>
                        <BodyInfo>{base_stat}</BodyInfo>
                      </InfoContent>
                    ))}
                  </InfoContainer>
                </Right>
              </>
            )}
          </Content>
        </Container>
      </Wrapper>

      <Alert ref={alertRef} />
    </>
  )
}

export default memo(Details)

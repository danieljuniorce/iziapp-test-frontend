import { useCallback, useEffect, useState } from 'react'
import { Badges, SideMenu, Wrapper, Loading } from '../../../components'
import { ChevronLeft, ChevronRight, Home } from 'react-feather'

import { RouteComponentProps, Link } from 'react-router-dom'

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
import { firstLetterUppercase } from '../../../utils'

function Details({ match }: RouteComponentProps<{ id: string }>) {
  const [loading, setLoading] = useState<boolean>(false)
  const [infoPokemon, setInfoPokemon] = useState<InfoPokemonProps | null>(null)

  const { id } = match.params

  const _loadInfoPokemonPerId = useCallback(async () => {
    setLoading(true)
    try {
      const result = await PokeApi.infoPokemon(parseInt(match.params.id))
      setInfoPokemon(result)

      setLoading(false)
    } catch (err) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [id, infoPokemon])

  const _getIdForPreviousOrNextPage = (identification: 'next' | 'previous') => {
    const { id } = match.params

    const idParseForInt = parseInt(id)

    if (identification === 'next') {
      return idParseForInt > 0 ? idParseForInt + 1 : idParseForInt
    } else {
      return idParseForInt > 1 ? idParseForInt - 1 : idParseForInt
    }
  }

  useEffect(() => {
    _loadInfoPokemonPerId()
  }, [id])

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
                    {infoPokemon?.types.map(({ type }) => (
                      <ItemType>
                        <Badges typePokemon={type.name}>
                          {firstLetterUppercase(type.name)}
                        </Badges>
                      </ItemType>
                    ))}
                  </ListTypes>
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
    </>
  )
}

export default Details

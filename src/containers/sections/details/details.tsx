import { useCallback, useEffect, useState } from 'react'
import { Badges, SideMenu, Wrapper } from '../../../components'

import { RouteComponentProps } from 'react-router-dom'

import {
  Container,
  Content,
  ContentNextOrPrevious,
  ImagePokemon,
  LeftPrevious,
  LeftPreviousText,
  NamePokemon,
  RightNext,
  RightNextText,
  ItemType,
  ListTypes,
  Weight,
  HeightPokemon,
  ItemStats,
  ListStats,
  ProgressStats,
  NameStats,
} from './details.styled'
import PokeApi, { InfoPokemonProps } from '../../../api/pokeapi'
import { firstLetterUppercase } from '../../../utils'

function Details({ match }: RouteComponentProps<{ id: string }>) {
  const [infoPokemon, setInfoPokemon] = useState<InfoPokemonProps | null>(null)

  const _loadInfoPokemonPerId = useCallback(async () => {
    try {
      const result = await PokeApi.infoPokemon(parseInt(match.params.id))
      setInfoPokemon(result)
    } catch (err) {
    } finally {
    }
  }, [match, infoPokemon])

  useEffect(() => {
    _loadInfoPokemonPerId()
  }, [])

  return (
    <>
      <SideMenu />
      <Wrapper>
        <Container>
          <Content>
            {infoPokemon && (
              <>
                <NamePokemon>{`#${infoPokemon?.id} ${firstLetterUppercase(
                  infoPokemon?.name
                )}`}</NamePokemon>

                <ImagePokemon
                  src={infoPokemon!.sprites.other.dream_world.front_default}
                  alt={`image pokemon ${infoPokemon?.name}`}
                />

                <ListTypes>
                  {infoPokemon?.types.map((type) => (
                    <ItemType>
                      <Badges green>
                        {firstLetterUppercase(type.type.name)}
                      </Badges>
                    </ItemType>
                  ))}
                </ListTypes>

                {/* <Weight>
                  Weight: {infoPokemon?.weight ? infoPokemon.weight : '???.?'}kg
                </Weight>
                <HeightPokemon>
                  Height: 0.
                  {infoPokemon?.height ? infoPokemon?.height : '???.?'}m
                </HeightPokemon> */}

                <ListStats>
                  {infoPokemon?.stats.map((stat) => (
                    <ItemStats>
                      <NameStats>
                        {firstLetterUppercase(stat.stat.name)}
                      </NameStats>

                      <ProgressStats
                        value={stat.base_stat}
                        max={100}
                      ></ProgressStats>
                    </ItemStats>
                  ))}
                </ListStats>
              </>
            )}
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}

export default Details

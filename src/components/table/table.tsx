import { memo, useCallback, useState } from 'react'
import { Star, Maximize2 } from 'react-feather'
import {
  Body,
  Container,
  Content,
  Divider,
  Header,
  TitleHeader,
  TitleHeaderText,
  ImgPokemonInTable,
  ContentImagePokemon,
} from './table.styled'

import {
  firstLetterUppercase,
  getIdPokemonInUrl,
  getImagePokemon,
} from '../../utils'
import { ViewPokemon } from '../../modal'
import { Button } from '../../components'
import { Link } from 'react-router-dom'

export type TableProps = {
  header: Array<string>
  body: Array<{ name: string; url: string }>
}

function Table({ header, body }: TableProps) {
  const [show, setShow] = useState<boolean>(false)
  const [infoPokemon, setInfoPokemon] = useState<{
    id: number
    img: string
    name: string
  } | null>(null)

  const _openModalViewPokemon = useCallback(
    ({ id, name }: { id: number; name: string }) => {
      setShow(true)
      setInfoPokemon({ img: getImagePokemon(id), name, id })
    },
    [infoPokemon, show]
  )

  const _onAddFavorite = useCallback(() => {}, [])

  const _onClose = useCallback(() => {
    setShow(false)
    setInfoPokemon(null)
  }, [infoPokemon, show])

  return (
    <>
      <ViewPokemon
        visible={show}
        title={`#${infoPokemon?.id} ${infoPokemon?.name}`}
        img={infoPokemon?.img}
        onClose={_onClose}
        onPress={_onAddFavorite}
        buttonText="Add Favorite"
        type="favorite"
      />
      <Container>
        <TitleHeader>
          <TitleHeaderText>Poke Collection</TitleHeaderText>
        </TitleHeader>
        <Content>
          <Header>
            <Divider>
              {header.map((headerText, index) => (
                <th key={index}>{headerText}</th>
              ))}
            </Divider>
          </Header>
          <Body>
            {body &&
              body.map((bodyInfo) => (
                <Divider key={getIdPokemonInUrl(bodyInfo.url)}>
                  <td>{getIdPokemonInUrl(bodyInfo.url)}</td>
                  <td>
                    <ContentImagePokemon
                      onClick={() =>
                        _openModalViewPokemon({
                          name: firstLetterUppercase(bodyInfo.name),
                          id: getIdPokemonInUrl(bodyInfo.url),
                        })
                      }
                    >
                      <Maximize2 />
                      <ImgPokemonInTable
                        src={getImagePokemon(getIdPokemonInUrl(bodyInfo.url))}
                      />
                    </ContentImagePokemon>
                  </td>
                  <td>{firstLetterUppercase(bodyInfo.name)}</td>
                  <td>
                    <Button yellow>Click for favorite</Button>
                  </td>
                  <td>
                    <Link to={`/details/${getIdPokemonInUrl(bodyInfo.url)}`}>
                      <Button>View Details</Button>
                    </Link>
                  </td>
                </Divider>
              ))}
          </Body>
        </Content>
      </Container>
    </>
  )
}

export default memo(Table)

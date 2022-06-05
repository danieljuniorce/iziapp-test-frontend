import { memo, useCallback, useState } from 'react'
import { Maximize, Maximize2 } from 'react-feather'
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
import { Button } from '../../components'
import { Link } from 'react-router-dom'

export type TableProps = {
  header: Array<string>
  body: Array<{ name: string; url: string }>
}

function Table({ header, body }: TableProps) {
  return (
    <>
      <Container>
        <TitleHeader>
          <TitleHeaderText>Pokedex</TitleHeaderText>
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
                    <ContentImagePokemon onClick={() => {}}>
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

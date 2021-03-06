import { useState, memo, useCallback, useEffect } from 'react'

import PokeApi from '../../../api/pokeapi'
import {
  SideMenu,
  Table,
  Wrapper,
  Paginate,
  Loading,
} from '../../../components'

import { countPagesPaginate } from '../../../utils'

function Home() {
  const [pokemons, setPokemons] = useState<
    Array<{ name: string; url: string }>
  >([])
  const [loading, setLoading] = useState<boolean>(false)
  const [countPages, setCountPages] = useState<number>(1)
  const [pageActual, setPageActual] = useState<number>(0)

  const _getListPokemon = useCallback(
    async (page: number) => {
      setLoading(true)
      try {
        const result = await PokeApi.listPokemonPerPage(page)
        setPokemons(result.results)
        setCountPages(countPagesPaginate(result.count, 20))
        setPageActual(page)
        setLoading(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch (err) {
        setLoading(false)
      } finally {
        setLoading(false)
      }
    },
    [pokemons]
  )

  useEffect(() => {
    _getListPokemon(pageActual)
  }, [])

  return (
    <>
      <SideMenu />
      <Loading visible={loading} />

      <Wrapper>
        <Table header={['#', 'Sprite', 'Name', 'View']} body={pokemons} />

        <Paginate
          pageCount={countPages}
          onPageChange={(page) => _getListPokemon(page.selected)}
        />
      </Wrapper>
    </>
  )
}

export default memo(Home)

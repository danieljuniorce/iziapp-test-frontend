import { useState, memo, useCallback, useEffect } from 'react'

import PokeApi from '../../../api/pokeapi'
import { SideMenu, Table, Wrapper, Paginate } from '../../../components'
import { countPagesPaginate } from '../../../utils'

function Home() {
  const [pokemons, setPokemons] = useState<
    Array<{ name: string; url: string }>
  >([])
  const [previous, setPrevious] = useState<string | null>(null)
  const [next, setNext] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [countPages, setCountPages] = useState<number>(1)
  const [pageActual, setPageActual] = useState<number>(0)

  const _getListPokemon = useCallback(
    async (page: number) => {
      try {
        const result = await PokeApi.listPokemonPerPage(page)
        setPokemons(result.results)
        setPrevious(result.previus)
        setNext(result.next)
        setCountPages(countPagesPaginate(result.count, 20))
      } catch (err) {
      } finally {
      }
    },
    [pokemons]
  )

  const _onPageChange = useCallback(async (page: number) => {
    setPageActual(page)
    console.log(page)
  }, [])

  useEffect(() => {
    _getListPokemon(pageActual)
  }, [])

  return (
    <>
      <SideMenu />
      <Wrapper>
        <Table
          header={['#', 'Sprite', 'Name', 'Favorite', 'View']}
          body={pokemons}
        />
        <Paginate
          pageCount={countPages}
          onPageChange={(page) => _getListPokemon(page.selected)}
        />
      </Wrapper>
    </>
  )
}

export default memo(Home)

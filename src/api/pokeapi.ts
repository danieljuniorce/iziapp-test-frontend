import axios from 'axios'
import { Axios } from './axios-config'

export type ListPokemonProps = {
  count: number
  next: string
  previus: string | null

  results: Array<{
    name: string
    url: string
  }>
}

const listPokemon = () => {
  return Axios().get<any, ListPokemonProps>('api/v2/pokemon')
}

export type InfoPokemonProps = {
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }>
  base_experience: number

  forms: Array<{
    name: string
    url: string
  }>

  game_indices: Array<{
    game_index: number
    version: {
      name: string
      url: string
    }
  }>

  height: boolean

  held_items: Array<any>

  id: number

  location_area_encounters: string

  moves: Array<{
    move: {
      name: string
      url: string
    }
    version_group_details: Array<{
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }>
  }>

  name: string

  order: number

  past_types: Array<any>

  species: {
    name: string
    url: string
  }

  sprites: {
    other: {
      dream_world: {
        front_default: string
        front_female: string | null
      }
    }
  }

  stats: Array<{
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }>

  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>

  weight: number
}

const infoPokemon = (pokemonId: number) => {
  return Axios().get<any, InfoPokemonProps>(`api/v2/pokemon/${pokemonId}`)
}

const listPokemonPerPage = (page: number) => {
  return Axios().get<any, ListPokemonProps>(
    `api/v2/pokemon/?offset=${page * 20}&limit=20`
  )
}
export { listPokemon, infoPokemon, listPokemonPerPage }
export default { listPokemon, infoPokemon, listPokemonPerPage }

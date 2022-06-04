export default function getIdPokemonInUrl(url: string): number {
  const removeUrl = url.replace('https://pokeapi.co/api/v2/pokemon/', '')

  return parseInt(removeUrl.replace('/', ''))
}

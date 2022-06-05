import store from '../redux/store'

type VerifyDuplicateProps = {
  id: number
  name: string
}

export default function verifyDuplicatePokemonInFavorite({
  id,
  name,
}: VerifyDuplicateProps): {
  has: boolean
  value: Array<VerifyDuplicateProps>
} {
  const getValuesFavorite = store.getState().favorite?.favorite

  const hasValue = getValuesFavorite.filter((value) => value.id === id)

  if (hasValue.length > 0) {
    return { has: true, value: getValuesFavorite }
  }

  return { has: false, value: [...getValuesFavorite, { id, name }] }
}

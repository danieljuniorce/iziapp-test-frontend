export default function firstLetterUppercase(text: string): string {
  const arrayName = text.split('-')

  const result = arrayName.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1) + ' '
  )

  return result[0]
}

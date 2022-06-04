export default function countPagesPaginate(
  totalItems: number,
  valueCount: number
): number {
  return parseInt((totalItems / valueCount).toString()) + 1
}

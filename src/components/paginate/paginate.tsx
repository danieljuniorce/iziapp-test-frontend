import { ReactPaginateProps } from 'react-paginate'
import { Container } from './paginate.styled'

export default function Paginate({ ...rest }: ReactPaginateProps) {
  return (
    <Container
      {...rest}
      activeClassName="active"
      activeLinkClassName="active-link"
    />
  )
}

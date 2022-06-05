import { ReactPaginateProps } from 'react-paginate'
import { Container } from './paginate.styled'

export default function Paginate({ ...rest }: ReactPaginateProps) {
  return (
    <Container
      {...rest}
      breakLabel="..."
      activeClassName="active"
      activeLinkClassName="active-link"
      pageRangeDisplayed={0}
      marginPagesDisplayed={1}
    />
  )
}

import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

export const Container = styled(ReactPaginate)`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;

  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;

  li {
    padding-left: 3px;
    padding-right: 3px;
  }

  li a {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding-top: 10px;
    padding-bottom: 10px;

    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .active-link {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`

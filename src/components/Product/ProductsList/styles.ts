import ReactPaginate from 'react-paginate';
import styled from 'styled-components'

export const ProductsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 700px) {
    margin-top: 23rem;
  }
`

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 3.5rem;
  margin-top: 3.5rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`
export const StyledReactPaginate = styled(ReactPaginate)`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 20px;

    li {
      margin-right: 8px;
      cursor: pointer;

      &.active {
        background-color: #007bff;
        color: #fff;
      }

      &.break {
        cursor: default;
      }
    }

    .previous,
    .next {
      cursor: pointer;
    }
  }
`;
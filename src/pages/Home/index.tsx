import { ProductsList } from '../../components/Product/ProductsList'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <ProductsList />
    </HomeContainer>
  )
}

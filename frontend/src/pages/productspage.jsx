import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, SimpleGrid, Heading, Spinner } from '@chakra-ui/react'
import ProductCard from '../components/productcard'
import axios from 'axios'

function ProductsPage() {
  const { subcategory } = useParams()
  const [products, setProducts] = useState([])

  /*useEffect(() => {
    axios.get('/api/products') , {
      //params: { category, subcategory }
    }
      .then(res => setProducts(res.data.data))
      .catch(err => console.error(err))
  }, [])*/

  useEffect(() => {
    axios.get('/api/products')
     .then(res => setProducts(res.data.data))
     .catch(err => console.error(err))
  })

  return (
    <Box p={6}>
      <Heading mb={4}>{subcategory.toUpperCase()}</Heading>
      {products.length === 0 ? <Spinner /> :
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {products.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </SimpleGrid>
      }
    </Box>
  )
}

export default ProductsPage
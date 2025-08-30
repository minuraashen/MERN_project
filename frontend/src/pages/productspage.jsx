import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, SimpleGrid, Heading, Spinner } from '@chakra-ui/react'
import ProductCard from '../components/productcard'
import axios from 'axios'

function ProductsPage() {
  const { category, subcategory, subitem } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products', {
      params: { category, subcategory, subitem }
    }).then(res => setProducts(res.data.data))
      .catch(err => console.error(err))
  }, [category, subcategory, subitem])

  return (
    <Box p={6}>
      <Heading mb={4}>Products</Heading>
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
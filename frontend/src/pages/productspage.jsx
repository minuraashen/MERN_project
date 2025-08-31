import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, SimpleGrid, Heading, Spinner } from '@chakra-ui/react'
import ProductCard from '../components/productcard'
import axios from 'axios'

function ProductsPage() {
  const { subcategory } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)

        // 1️⃣ First get categories and find the matching subcategory
        const catRes = await axios.get('/api/categories')
        const categories = catRes.data.data

        let foundId = null
        for (let cat of categories) {
          const sub = cat.subCategories.find(
            sc => sc.name.toLowerCase() === subcategory.toLowerCase()
          )
          if (sub) {
            foundId = sub._id
            break
          }
        }

        if (!foundId) {
          console.warn('No subcategory found for:', subcategory)
          setProducts([])
          setLoading(false)
          return
        }

        // 2️⃣ Then get products and filter by foundId
        const prodRes = await axios.get('/api/products')
        const filteredProducts = prodRes.data.data.filter(
          p => p.subcategory === foundId // make sure key matches backend schema
        )

        setProducts(filteredProducts)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [subcategory])

  return (
    <Box p={6}>
      <Heading mb={4}>{subcategory.toUpperCase()}</Heading>

      {loading ? (
        <Spinner />
      ) : products.length === 0 ? (
        <Box>No products found in this subcategory.</Box>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {products.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default ProductsPage

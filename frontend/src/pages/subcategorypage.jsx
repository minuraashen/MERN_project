import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import SubcategoryCard from '../components/subcategorycard'

function SubCategoryPage() {
  const { category } = useParams()
  const [subcategories, setSubcategories] = useState([])

  useEffect(() => {
    axios.get(`/api/categories`)
      .then(res => {
        const cat = res.data.data.find(c => c.name.toLowerCase() === category.toLowerCase())
        if (cat) setSubcategories(cat.subCategories || [])
      })
      .catch(err => console.error(err))
  }, [category])

  return (
    <Box p={6}>
      <Heading mb={4}>Subcategories</Heading>
      {subcategories.length === 0 ? <Spinner /> :
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {subcategories.map(sc => (
            <SubcategoryCard key={sc._id} name={sc.name} />
          ))}
        </SimpleGrid>
      }
    </Box>
  )
}

export default SubCategoryPage
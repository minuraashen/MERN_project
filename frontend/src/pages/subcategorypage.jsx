import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import SubCategoryCard from '../components/subcategorycard'

function SubCategoryPage() {
  const { category } = useParams()
  const [subcategories, setSubcategories] = useState([])

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => { 
        const cat = res.data.data.find(c => c.name.toLowerCase() === category.toLowerCase())
        console.log(cat.subCategories)
        if (cat) setSubcategories(cat.subCategories || [])
      })
      .catch(err => console.error(err))
  }, [category])

  return (
    <Box p={6}>
      <Heading mb={4}>{category.toUpperCase()}</Heading>
      {subcategories.length === 0 ? <Spinner /> :
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {subcategories.map(sc => (
            <SubCategoryCard key={sc._id} subcategory={sc} />
          ))}
        </SimpleGrid>
      }
    </Box>
  )
}

export default SubCategoryPage
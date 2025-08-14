import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

function SubItemPage() {
  const { category, subcategory } = useParams()
  const [subitems, setSubitems] = useState([])

  useEffect(() => {
    axios.get(`/api/categories`)
      .then(res => {
        const cat = res.data.data.find(c => c.name.toLowerCase() === category.toLowerCase())
        const subcat = cat?.subCategories.find(sc => sc.name.toLowerCase() === subcategory.toLowerCase())
        if (subcat) setSubitems(subcat.subItems || [])
      })
      .catch(err => console.error(err))
  }, [category, subcategory])

  return (
    <Box p={6}>
      <Heading mb={4}>Subitems</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {subitems.map((item, i) => (
          <Box key={i} p={4} shadow="md" borderWidth="1px">
            <Text>{item.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default SubItemPage

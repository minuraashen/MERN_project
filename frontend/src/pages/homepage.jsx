import { useEffect, useState } from 'react'
import { SimpleGrid, Box, Heading, Spinner, Center } from '@chakra-ui/react'
import CategoryCard from '../components/categorycard'
import axios from 'axios'

const bgImages = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BwaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3BwaW5nfGVufDB8fDB8fHww",

]

function Homepage() {
  const [categories, setCategories] = useState([])
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => setCategories(res.data.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev+1) % bgImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])


  return (
    <Box
      minH="100vh"
      bgImage={`url(${bgImages[bgIndex]})`}
      bgSize="cover"
      bgPosition="center"
      transition="background-image 1s ease-in-out"
      px={6}
      py={10}
    >
      <Box bg='whiteAlpha.600' p={6} borderRadius='lg' backdropFilter='blur(2px)'>
        <Heading mb={4} align={Center}>CATEGORIES</Heading>
        {categories.length === 0 ? <Spinner /> :
          <SimpleGrid columns={
            {base:1,
            md:2,
            lg:3}
          } spacing={8}>
            {categories.map(cat => (
              <CategoryCard key={cat._id} category={cat} />
            ))}
          </SimpleGrid>
        }
      </Box>
    </Box> 
  )
}

export default Homepage


/*import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/productcard";

const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products",products)

  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
        <Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, pink.300, purple.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Products Available
				</Text>

        <SimpleGrid 
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize='x1' textAlign={"centre"} fontWeight="bold" color='gray.500'>
          No products found 😢{" "}
          <Link to={'/create'}>
            <Text as='span' color='purple.300' _hover={{ textDecoration: "underline"}}>
              Create a Product
            </Text>
          </Link>
        </Text>
        )}
        
      </VStack>

    </Container>
  )
}

export default Homepage; */

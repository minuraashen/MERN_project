import { Box, Container, VStack, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react';
import { useState } from "react";




const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleAddProduct = () => {
    console.log(newProduct)
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create new Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.700")}
         p={6} rounded={"lg"} shadow={"md"} >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
            />

            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
            />

            <Input
              placeholder='Description'
              name='description'
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value})}
            />

            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
};

export default Createpage

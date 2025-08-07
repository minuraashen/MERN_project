import { Box, Heading } from '@chakra-ui/react'

function Createpage() {
  return (
    <Box p={6}>
      <Heading>Create Page</Heading>
      {/* Add forms for category/product creation here */}
    </Box>
  )
}

export default Createpage

/*import { Box, Container, VStack, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react';
import { useState } from "react";
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react'



const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const toast = useToast()

  const {createProduct} = useProductStore()
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success){
      toast({
        title:"Error",
        description: message, 
        status: "error",
        isClosable: true
      });
    } else {
      toast({
        title:"Sucess",
        description: message,
        status: "success",
        isClosable: true
      });
    }
    setNewProduct({ name:"", price:"", description:"", image:""});
  };
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
            <Button colorScheme='purple' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
};

export default Createpage */

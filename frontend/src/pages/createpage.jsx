import { Box, Heading, HStack, useToast, Flex, AspectRatio } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'



const blurredBg1 = "https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const blurredBg2 = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const Createpage = () => {
  const navigate = useNavigate()

  return (
    <HStack
      spacing={10}
      justify="center"
      align="center"
      px={10}
      py={20}
      wrap="wrap"
    >
      {/* Create Category Button */}
    <AspectRatio ratio={16/9} w={{ base: "90%", md: "45%" }} borderRadius="xl"
        overflow="hidden"
        cursor="pointer"
        onClick={() => navigate('/createcategory')}>
      <Box
        bgImage={`url(${blurredBg2})`}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(121, 118, 118, 0.4)",
          backdropFilter: "blur(4px)",
          zIndex: 0,
        }}
      >
        <Box
          position="relative"
          zIndex={1}
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="white" fontSize={{base:"xl", md:"2xl", lg:"4xl"}}>
            Create New Category
          </Heading>
        </Box>
      </Box>
    </AspectRatio>

      {/* Create Product Button */}

      <AspectRatio 
        ratio={16/9}
        overflow="hidden"
        cursor="pointer"
        w={{ base: "90%", md: "45%" }}
        borderRadius="xl">
      <Box

        bgImage={`url(${blurredBg1})`}
        bgSize="cover"
        bgPosition="center"
        position="relative"

        onClick={() => navigate('/createproduct')}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(137, 134, 134, 0.4)",
          backdropFilter: "blur(4px)",
          zIndex: 0,
        }}
      >
        <Box
          position="relative"
          zIndex={1}
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="white" fontSize={{base:"xl", md:"2xl", lg:"4xl"}}>
            Create New Product
          </Heading>
        </Box>
      </Box>
      </AspectRatio>
    </HStack>
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

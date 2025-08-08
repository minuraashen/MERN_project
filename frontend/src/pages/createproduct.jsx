import { Box, useToast, VStack, Input, Button, Heading, Flex, Text } from '@chakra-ui/react'
import { useProductStore } from '../store/product.js'
import { useState } from 'react'

const CreateProductPage = () => {
  const [ newProduct, setNewProduct ] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    category: "",
    subcategory: "",
    subitem: ""
  })

  const toast = useToast()

  const {createProduct} = useProductStore()
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct)
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
    setNewProduct({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    category: "",
    subcategory: "",
    subitem: ""
  })
  }


  return (
    <Flex 
      py={140}
      align='center'
      justify='center'
    >
    <Box 
      align='center'
      justify='center'
      bg='gray.200'
      p={2}
      rounded='lg'
      shadow='lg'
      w='60%'
      >
      <Heading size='xl' py={6}>Create a New Product</Heading>
      <VStack spacing={4}>
        <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Product Name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
          />
          <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Product Price'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
          />
          <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Available Stock'
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value})}
          />
          <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Product Description'
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value})}
          />
          <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Product Image'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
          />
          <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Category'
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value})}
          />
          <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Subcategory'
          value={newProduct.subcategory}
          onChange={(e) => setNewProduct({ ...newProduct, subcategory: e.target.value})}
          />
          <Input
          fontSize='2xl'
          h={{ base:'40px', md:'64px', lg:'80px' }}
          placeholder='Subitem'
          value={newProduct.subitem}
          onChange={(e) => setNewProduct({ ...newProduct, subitem: e.target.value})}
          />
          <Button onClick={handleAddProduct} colorScheme="purple" w="full" h='80px'>
            <Text fontSize='2xl'>Add Product</Text>
          </Button>
      </VStack>
    </Box>
    </Flex>
  )

}

export default CreateProductPage

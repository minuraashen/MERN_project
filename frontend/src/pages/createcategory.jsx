import { useToast, Flex, Box, Heading, Input, VStack, Text, Button, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { useCategoryStore } from '../store/category.js'

const CreateCategoryPage = () => {
  const [ newCategory, setNewCategory] = useState({
    name:"",
    image:"",
    description:"",
    subCategories: [{
      name:"",
      image:"",
      description:"",
      subItems: [{
        name:"",
        image:"",
        description:""
      }]
    }],
  })

  const toast = useToast()

  const {createCategory} = useCategoryStore()

  const handleAddCategory =  async () => {
    const { success, message } = await createCategory(newCategory)
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
    setNewCategory({
    name:"",
    image:"",
    description:"",
    subCategories: [{
      name:"",
      image:"",
      description:"",
      subItems: [{
        name:"",
        image:"",
        description:""
      }]
    }],
  })
  }
  return (
    <Flex 
      align='center'
      justify='center'
      py='140px'
    >
    <Box align='center'
      justify='center'
      bg='gray.200'
      p={2}
      rounded='lg'
      shadow='lg'
      w='60%'>
      <Heading size='xl' py={6}>Create a New Category</Heading>
        <VStack spacing={4}>
          <Input
            fontSize='2xl'
            h={{ base:'40px', md:'64px', lg:'80px' }}
            placeholder="Category Name"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          />
          <Input
            fontSize='2xl'
            h={{ base:'40px', md:'64px', lg:'80px' }}
            placeholder="Image URL"
            value={newCategory.image}
            onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
          />
          <Textarea
            fontSize='2xl'
            h={{ base:'64px', md:'80px', lg:'120px' }}
            placeholder="Description"
            value={newCategory.description}
            onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
          />
          <Button onClick={handleAddCategory} colorScheme="purple" w="full" h='80px'>
            <Text fontSize='2xl'>Add Category</Text>
          </Button>
      </VStack>
    </Box>

    </Flex>
  )
}


export default CreateCategoryPage

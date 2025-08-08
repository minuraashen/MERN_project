import { Button, Card, CardBody, CardFooter, Heading, HStack, useColorModeValue, VStack, useToast, useDisclosure, Image, Text, Divider } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useCategoryStore } from "../store/category"
import { useState } from "react"


const CategoryCard = ({ category }) => {
  const { deleteCategory, updateCategory } = useCategoryStore()
  const toast = useToast()
  const [ updatedCategory, setUpdatedCategory ] = useState(category)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/category/${category.name.toLowerCase()}`)
  }

  const handleDeleteCategory = async(pid) => {
    const { success, message } = await deleteCategory(pid)
    if (!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true
      })
    }
  }

  const handleUpdateCategory = async(pid, updatedCategory) => {
    const { success, message } = await updateCategory(pid, updatedCategory)
    onClose()
    if (!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true
      })
    }
  } 
  

  return (
    <Card onClick={handleCardClick} cursor="pointer" _hover={{ boxShadow: "lg" }}>
      <CardBody>
        <Image
          src = {category.image} alt={category.name} borderRadius='md'
        />
        <VStack mt={3} align="start">
          <Heading size="md">{category.name}</Heading>
          <Text fontSize="sm" color="gray.600">
            {category.description}
          </Text>
        </VStack>
        <Divider my={4}/>
        <CardFooter>
          <HStack spacing={2}>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                onOpen()
              }}
              colorScheme="blue"
              size="sm"
            >
              Update
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                handleDeleteCategory(category._id)
              }}
              colorScheme="red"
              size="sm"
            >
              Delete
            </Button>
          </HStack>
        </CardFooter>
        <Heading size="md">{category.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default CategoryCard
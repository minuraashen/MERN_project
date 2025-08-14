import { Button, Card, CardBody, CardFooter, Heading, Flex, useColorModeValue, VStack, useToast, useDisclosure, Image, Text, Divider, HStack, AspectRatio } from "@chakra-ui/react"
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
        <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          src = {category.image} alt={category.name} borderRadius='md' objectFit="cover" w="100%" h="250px"
        />
        </AspectRatio>
        <VStack mt={3} align="start">
          <Heading size="lg" >{category.name}</Heading>
          <Text fontSize="sm" color="gray.600">
            {category.description}
          </Text>
        </VStack>
        <CardFooter>
          <HStack justifyContent="flex-end" w="100%">
            <Button
              onClick={(e) => {
                e.stopPropagation()
                onOpen()
              }}
              colorScheme="blue"
              size="sm"
              variant="outline"
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
              variant="outline"
            >
              Delete
            </Button>
          </HStack>
        </CardFooter>
      </CardBody>
    </Card>
  )
}

export default CategoryCard
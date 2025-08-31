import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  useColorModeValue,
  VStack,
  useToast,
  useDisclosure,
  Image,
  Text,
  Divider,
  HStack,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useCategoryStore } from "../store/category"
import { useState } from "react"

const CategoryCard = ({ category }) => {
  const { deleteCategory, updateCategory } = useCategoryStore()
  const toast = useToast()
  const [updatedCategory, setUpdatedCategory] = useState(category)
  const [loading, setLoading] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/${category.name.toLowerCase()}`)
  }

  const handleDeleteCategory = async (pid) => {
    const { success, message } = await deleteCategory(pid)
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    })
  }

  const handleUpdate = async () => {
    setLoading(true)
    const { success, message } = await updateCategory(category._id, updatedCategory)
    setLoading(false)
    onClose()
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Card
      onClick={handleCardClick}
      cursor="pointer"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "lg" }}
    >
      <CardBody>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            src={category.image}
            alt={category.name}
            borderRadius="md"
            objectFit="cover"
            w="100%"
            h="250px"
          />
        </AspectRatio>
        <VStack mt={3} align="start">
          <Heading size="lg">{category.name}</Heading>
          <Text fontSize="sm" color="gray.600">
            {category.description}
          </Text>
        </VStack>
      </CardBody>

      <CardFooter>
        <HStack justifyContent="flex-end" w="100%">
          {/* Update Button */}
          <Button
            onClick={(e) => {
              e.stopPropagation()
              setUpdatedCategory(category) // load current values into state
              onOpen()
            }}
            colorScheme="blue"
            size="sm"
            variant="outline"
          >
            Update
          </Button>

          {/* Update Modal */}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Category</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl mb={3}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={updatedCategory.name}
                    onChange={(e) =>
                      setUpdatedCategory({ ...updatedCategory, name: e.target.value })
                    }
                    placeholder="Enter category name"
                  />
                </FormControl>

                <FormControl mb={3}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    value={updatedCategory.description}
                    onChange={(e) =>
                      setUpdatedCategory({ ...updatedCategory, description: e.target.value })
                    }
                    placeholder="Enter description"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    value={updatedCategory.image}
                    onChange={(e) =>
                      setUpdatedCategory({ ...updatedCategory, image: e.target.value })
                    }
                    placeholder="Enter image URL"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={handleUpdate}
                  isLoading={loading}
                >
                  Save Changes
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Delete Button */}
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
    </Card>
  )
}

export default CategoryCard

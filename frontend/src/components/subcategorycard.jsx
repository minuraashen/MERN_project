import { Button, Card, CardBody, CardFooter, Heading, Flex, useColorModeValue, VStack, useToast, useDisclosure, Image, Text, Divider, HStack, AspectRatio } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


const SubCategoryCard = ({ subcategory }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
      navigate(`/products/${subcategory.name.toLowerCase()}`)
    }


  return (
    <Card onClick={handleCardClick} cursor="pointer" _hover={{ boxShadow: "lg" }}>
      <CardBody>
        <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          src = {subcategory.image} alt={subcategory.name} borderRadius='md' objectFit="cover" w="100%" h="250px"
        />
        </AspectRatio>
        <VStack mt={3} align="start">
          <Heading size="lg" >{subcategory.name}</Heading>
          <Text fontSize="sm" color="gray.600">
            {subcategory.description}
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
                handleDeleteSubcategory(subcategory._id)
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

export default SubCategoryCard

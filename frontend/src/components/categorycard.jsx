import { Card, CardBody, Heading, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useCategoryStore } from "../store/category"
import { useState } from "react"

const CategoryCard = ({ category }) => {
  const { deleteCategory, updateCategory } = useCategoryStore
  const toast = useToast()
  const [ updatedCategory, setUpdatedCategory ] = useState(category)

  const { isOpen, onOpne, onClose } = useDisclosure()
}
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/category/${name.toLowerCase()}`)
  }

  return (
    <Card onClick={handleClick} cursor="pointer" _hover={{ boxShadow: "lg" }}>
      <CardBody>
        <Heading size="md">{name}</Heading>
      </CardBody>
    </Card>
  )

export default CategoryCard
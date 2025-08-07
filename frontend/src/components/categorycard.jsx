import { Card, CardBody, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

function CategoryCard({ name }) {
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
}

export default CategoryCard
import { Box, Heading, Text, Image, Stack } from '@chakra-ui/react'

function ProductDetailPage({ product }) {
  return (
    <Box p={6}>
      <Stack direction={["column", "row"]} spacing={6}>
        <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
        <Box>
          <Heading>{product.name}</Heading>
          <Text fontSize="lg">Rs. {product.price}</Text>
          <Text>{product.description}</Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default ProductDetailPage
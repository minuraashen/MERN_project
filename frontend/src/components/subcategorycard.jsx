import { Box, Image, Text, Stack, Heading, Button } from "@chakra-ui/react"

function ProductCard({ product }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
      <Stack spacing={2} mt={4} textAlign="center">
        <Heading size="md">{product.name}</Heading>
        <Text>Rs. {product.price}</Text>
        <Text fontSize="sm" color="gray.500">{product.description}</Text>
        <Button colorScheme="blue">Add to Cart</Button>
      </Stack>
    </Box>
  )
}

export default ProductCard

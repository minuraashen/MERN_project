import {
  Box,
  Image,
  Text,
  Heading,
  HStack,
  IconButton,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product, addToCart }) => {
  const toast = useToast();
  const { deleteProduct, updateProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 🛒 Add to Cart
  const handleAddToCart = () => {
    if (addToCart) addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  // 🗑 Delete Product
  const handleDeleteProduct = async () => {
    const { success, message } = await deleteProduct(product._id);
    toast({
      title: success ? "Deleted" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  // ✏️ Update Product
  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(product._id, updatedProduct);
    onClose();
    toast({
      title: success ? "Updated" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      maxW={{ base: "lg", xl: "xl" }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgColor="white"
      shadow="md"
    >
      <Image src={product.image} alt={product.name} objectFit="cover" w="100%" h="250px" />

      <Box p="4">
        {/* Name + Price LEFT | Buttons RIGHT */}
        <HStack justify="space-between" align="center">
          <VStack align="flex-start" spacing={1}>
            <Heading size="md" color="blue.800">
              {product.name}
            </Heading>
            <Text fontSize="lg">{`Rs: ${product.price}`}</Text>
          </VStack>

          <HStack spacing={2}>
            <IconButton
              icon={<AddIcon />}
              aria-label="Add to Cart"
              colorScheme="green"
              onClick={handleAddToCart}
            />
            <IconButton
              icon={<EditIcon />}
              aria-label="Edit Product"
              colorScheme="blue"
              onClick={onOpen}
            />
            <IconButton
              icon={<DeleteIcon />}
              aria-label="Delete Product"
              colorScheme="red"
              onClick={handleDeleteProduct}
            />
          </HStack>
        </HStack>
      </Box>

      {/* Update Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3}>
              <Input
                placeholder="Product Name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Description"
                value={updatedProduct.description}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, description: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateProduct}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;

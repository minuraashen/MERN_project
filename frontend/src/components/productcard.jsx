import {
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
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
  VStack,
  Input,
  Button,
  ModalFooter
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.700");
  
  const { deleteProduct, updateProduct } = useProductStore()
  const toast = useToast()
  const [ updatedProduct, setUpdatedproduct ] = useState(product)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDeleteProduct = async (pid) => {
    const { success, message} = await deleteProduct(pid)
    if (!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000, 
        isClosable: true
      })
    } else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true
      })
    }
  }

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
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
      });
    };
  }

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontSize="sm" color={textColor} mb={4}>
          {product.description}
        </Text>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
              <VStack spacing={4}>
                <Input
                  placeholder='Product Name'
                  name='name'
                  value={updatedProduct.name}
                  onChange={(e) => setUpdatedproduct({ ...updatedProduct, name: e.target.value})}
                 />
    
                <Input
                  placeholder='Price'
                  name='price'
                  type='number'
                  value={updatedProduct.price}
                  onChange={(e) => setUpdatedproduct({ ...updatedProduct, price: e.target.value})}
                  />
    
                <Input
                  placeholder='Description'
                  name='description'
                  value={updatedProduct.description}
                  onChange={(e) => setUpdatedproduct({ ...updatedProduct, description: e.target.value})}
                 />
    
                <Input
                  placeholder='Image URL'
                  name='image'
                  value={updatedProduct.image}
                  onChange={(e) => setUpdatedproduct({ ...updatedProduct, image: e.target.value})}
                  />
              </VStack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} colorScheme={'blue'} onClick={() => handleUpdateProduct(product._id, updatedProduct)} >Update</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </Box>
  );
};

export default ProductCard;

import { useToast, Flex, Box, Heading, Input, VStack, Text, Button, Textarea, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { useCategoryStore } from '../store/category.js'

const CreateCategoryPage = () => {
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: "",
    description: "",
    subCategories: [],
  })

  const toast = useToast()
  const { createCategory } = useCategoryStore()

  // Add new subcategory
  const addSubCategory = () => {
    setNewCategory({
      ...newCategory,
      subCategories: [
        ...newCategory.subCategories,
        { name: "", image: "", description: "", subItems: [] }
      ]
    })
  }

  // Remove subcategory
  const removeSubCategory = (index) => {
    const updated = [...newCategory.subCategories]
    updated.splice(index, 1)
    setNewCategory({ ...newCategory, subCategories: updated })
  }

  // Update subcategory field
  const updateSubCategory = (index, field, value) => {
    const updated = [...newCategory.subCategories]
    updated[index][field] = value
    setNewCategory({ ...newCategory, subCategories: updated })
  }

  // Add subitem to a subcategory
  const addSubItem = (subIndex) => {
    const updated = [...newCategory.subCategories]
    updated[subIndex].subItems.push({ name: "", image: "", description: "" })
    setNewCategory({ ...newCategory, subCategories: updated })
  }

  // Remove subitem
  const removeSubItem = (subIndex, itemIndex) => {
    const updated = [...newCategory.subCategories]
    updated[subIndex].subItems.splice(itemIndex, 1)
    setNewCategory({ ...newCategory, subCategories: updated })
  }

  // Update subitem field
  const updateSubItem = (subIndex, itemIndex, field, value) => {
    const updated = [...newCategory.subCategories]
    updated[subIndex].subItems[itemIndex][field] = value
    setNewCategory({ ...newCategory, subCategories: updated })
  }

  const handleAddCategory = async () => {
    const { success, message } = await createCategory(newCategory)
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      isClosable: true,
    })

    // Reset form after submission
    setNewCategory({ 
      name: "", 
      image: "", 
      description: "", 
      subCategories: [] 
    })
  }

  return (
    <Flex align='center' justify='center' py='140px'>
      <Box bg='gray.200' p={4} rounded='lg' shadow='lg' w='70%'>
        <Heading size='xl' py={6}>Create a New Category</Heading>
        <VStack spacing={4}>
          {/* Category Inputs */}
          <Input
            fontSize='2xl'
            placeholder="Category Name"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          />
          <Input
            fontSize='2xl'
            placeholder="Image URL"
            value={newCategory.image}
            onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
          />
          <Textarea
            fontSize='2xl'
            placeholder="Description"
            value={newCategory.description}
            onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
          />

          {/* Subcategories */}
          <Heading size="md" pt={4}>Subcategories</Heading>
          {newCategory.subCategories.map((sub, subIndex) => (
            <Box key={subIndex} bg="gray.100" p={4} rounded="lg" w="full">
              <Flex justify="space-between" align="center">
                <Text fontWeight="bold">Subcategory {subIndex + 1}</Text>
                <IconButton
                  icon={<DeleteIcon />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => removeSubCategory(subIndex)}
                />
              </Flex>
              <VStack spacing={2} mt={2}>
                <Input
                  placeholder="Subcategory Name"
                  value={sub.name}
                  onChange={(e) => updateSubCategory(subIndex, "name", e.target.value)}
                />
                <Input
                  placeholder="Image URL"
                  value={sub.image}
                  onChange={(e) => updateSubCategory(subIndex, "image", e.target.value)}
                />
                <Textarea
                  placeholder="Description"
                  value={sub.description}
                  onChange={(e) => updateSubCategory(subIndex, "description", e.target.value)}
                />

                {/* Subitems */}
                <Heading size="sm" mt={2}>Subitems</Heading>
                {sub.subItems.map((item, itemIndex) => (
                  <Box key={itemIndex} bg="white" p={2} rounded="md" w="full">
                    <Flex justify="space-between" align="center">
                      <Text fontSize="sm">Subitem {itemIndex + 1}</Text>
                      <IconButton
                        icon={<DeleteIcon />}
                        size="xs"
                        colorScheme="red"
                        onClick={() => removeSubItem(subIndex, itemIndex)}
                      />
                    </Flex>
                    <Input
                      placeholder="Subitem Name"
                      value={item.name}
                      onChange={(e) => updateSubItem(subIndex, itemIndex, "name", e.target.value)}
                    />
                    <Input
                      placeholder="Image URL"
                      value={item.image}
                      onChange={(e) => updateSubItem(subIndex, itemIndex, "image", e.target.value)}
                    />
                    <Textarea
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) => updateSubItem(subIndex, itemIndex, "description", e.target.value)}
                    />
                  </Box>
                ))}

                <Button size="sm" colorScheme="blue" onClick={() => addSubItem(subIndex)}>+ Add Subitem</Button>
              </VStack>
            </Box>
          ))}
          <Button leftIcon={<AddIcon />} colorScheme="green" onClick={addSubCategory}>Add Subcategory</Button>

          {/* Submit Button */}
          <Button onClick={handleAddCategory} colorScheme="purple" w="full" h='80px'>
            <Text fontSize='2xl'>Add Category</Text>
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}

export default CreateCategoryPage

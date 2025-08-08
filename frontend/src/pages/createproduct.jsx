import React from 'react'


const CreateProductPage = () => {
  const [ newProduct, setNewProduct ] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    category: "",
    subcategory: "",
    subitem: ""
  })

  const toast = useToast()

  const {createProduct} = useProductStore()
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct)
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
    setNewProduct({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    category: "",
    subcategory: "",
    subitem: ""
  })
  }


  return (
    <div>
      
    </div>
  )

}

export default CreateProductPage

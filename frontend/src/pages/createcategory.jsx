import React from 'react'

const CreateCategoryPage = () => {
  const [ newCategory, setNewCategory] = useState({
    name:"",
    image:"",
    description:"",
    subCategories: [{
      name:"",
      image:"",
      description:"",
      subItems: [{
        name:"",
        image:"",
        description:""
      }]
    }],
  })

  const {createCategory} = useCategoryStore()

  const handleAddcategory =  async () => {
    const { success, message } = await createCategory(newCategory)
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
    setNewCategory({
    name:"",
    image:"",
    description:"",
    subCategories: [{
      name:"",
      image:"",
      description:"",
      subItems: [{
        name:"",
        image:"",
        description:""
      }]
    }],
  })
  }

  return (
    <div>
      
    </div>
  )
}


export default CreateCategoryPage

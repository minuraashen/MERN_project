import mongoose from "mongoose"

const subitemSchema = new mongoose.Schema({
  name: {type: String},
  image: {type: String},
  description: {type: String}
})

const subcategorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String},
  description: {type: String},
  subItems: [subitemSchema]
})

const categorySchema =  new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String},
  description: {type: String},
  subCategories: [subcategorySchema]
})

const Category = mongoose.model("Category", categorySchema)
export default Category
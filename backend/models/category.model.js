import mongoose from "mongoose"

const subitemSchema = new mongoose.Schema({
  name: {type: String, requied: true},
})

const subcategorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  subItems: [subitemSchema]
})

const categorySchema =  new mongoose.Schema({
  name: {type: String, required: true},
  subcategories: [subcategorySchema]
})

const Category = mongoose.model("Category", categorySchema)
export default Category
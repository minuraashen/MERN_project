import mongoose from "mongoose"

const subitemSchema = new mongoose.Schema({
  name: {type: String, requied: true},
})

const subcategorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  items: [subitemSchema]
})

const categorySchema =  new mongoose.Schema({
  name: {type: String, required: true},
  items: [subcategorySchema]
})

const Category = mongoose.model("Category", categorySchema)
export default Category
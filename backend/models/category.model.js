import mongoose from "mongoose"

const subitemSchema = new mongoose.Schema({
  name: {type: String},
})

const subcategorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  subItems: [subitemSchema]
})

const categorySchema =  new mongoose.Schema({
  name: {type: String, required: true},
  subCategories: [subcategorySchema]
})

const Category = mongoose.model("Category", categorySchema)
export default Category
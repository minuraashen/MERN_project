import mongoose from "mongoose"

const subcategorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String},
  description: {type: String},
})

const categorySchema =  new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String},
  description: {type: String},
  subCategories: [subcategorySchema]
}, {
  timestamps: true
})

const Category = mongoose.model("Category", categorySchema)
export default Category
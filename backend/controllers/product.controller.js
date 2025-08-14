import Product from '../models/product.model.js';
import Category from '../models/category.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(`Error in fetching products: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server error'});
  }
};

export const createProducts = async (req,res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.stock || !product.category || !product.subcategory) {
    return res.status(400).json({success: false, message: 'All Essentaial fields are required' });
  }

    const { name, price, stock, description, image, category, subcategory, subitem } = req.body;

    // 1. Find the category by name or ID (use one method consistently)
    const categoryDoc = await Category.findOne({ name: category });
    if (!categoryDoc) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    // 2. Check subcategory exists in categoryDoc.subCategories
    const subCategoryDoc = categoryDoc.subCategories.find(sc => sc.name === subcategory);
    if (!subCategoryDoc) {
      return res.status(404).json({ success: false, message: "Subcategory not found" });
    }

    // 3. Check if subitem exists (if provided)
    const subItemDoc = subCategoryDoc.subItems.find(si => si.name === subitem);
    console.log(subItemDoc)
    if (subitem && !subItemDoc) {
      return res.status(404).json({ success: false, message: "Subitem not found in subcategory" });
    }

  const newProduct = new Product({
      name,
      price,
      stock,
      description,
      image,
      category: categoryDoc._id,
      subcategory: subCategoryDoc ? subCategoryDoc._id : undefined,
      subitem: subItemDoc ? subItemDoc._id : undefined
  });

  try {
    await newProduct.save();
    res.status(201).json({success: true, data: newProduct, message: 'Product created successfully'});
  } catch (error) {
    console.error(`Error creating product: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;

  const updatedData = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: 'Invalid product ID' });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json({ success: true, data: updatedProduct, message: 'Product updated successfully' });
  } catch (error) {
    console.error(`Error updating product: ${error.message}`);    
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteProducts = async (req, res) => {
  const {id} = req.params;
  console.log(`Deleting product with ID: ${id}`);
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, message: 'Product deleted successfully' });

  } catch(error){
    console.error(`Error deleting product: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
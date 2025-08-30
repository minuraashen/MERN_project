import mongoose from "mongoose";
import Category from '../models/category.model.js';


// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    console.error(`Error in fetching categories: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

//  Create a new category
export const createCategory = async (req, res) => {
  const { name, image, description, subCategories } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: "Category name is required" });
  }

  if (!subCategories) {
    return res.status(400).json({ success: false, message: "Subcategory field is required" });
  }

  // Check if category already exists
  const existing = await Category.findOne({ name });
  if (existing) {
    return res.status(400).json({ success: false, message: 'Category already exists' });
  }

  try {
    const newCategory = new Category({ name, image, description, subCategories });
    await newCategory.save();
    res.status(201).json({ success: true, data: newCategory, message: "Created category successfully" });
  } catch (error) {
    console.error(`Error creating category: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Update category
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, image, description, subCategories, subItems } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: 'Invalid category ID' });
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, image, description, subCategories, subItems },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.status(200).json({ success: true, data: updatedCategory, message: 'Category updated successfully' });
  } catch (error) {
    console.error(`Error updating category: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete category
export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: 'Invalid category ID' });
  }

  try {
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.status(200).json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    console.error(`Error deleting category: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

import { create } from 'zustand'
import axios from 'axios'
import { createCategory } from '../../../backend/controllers/category.controller'

export const useCategoryStore = create((set) => ({
  categories: [],
  setCategories: (categories) => set({categories}),

  createCategory: async(newCategory) => {
    if (!newCategory.name || !newCategory.subCategories.length) { 
      return {success: false, message: 'All Essential Fields are Required'}
    }
    const res = await fetch('/api/categories', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCategory)
    })
    const data = await res.json()
    set((state) => ({ categories:[ ...state.categories, data.data]}))
    return {success: true, message: "Category Created Successfully"}
    
  },


  /*
  selectedCategory: null,
  selectedSubcategory: null,
  selectedSubitem: null,

  setCategories: (categories) => set({ categories }),
  setSelectedCategory: (cat) => set({ selectedCategory: cat }),
  setSelectedSubcategory: (sub) => set({ selectedSubcategory: sub }),
  setSelectedSubitem: (item) => set({ selectedSubitem: item }), */

  deleteCategory: async (categoryId) => {
    try {
      const res = await axios.delete(`/api/categories/${categoryId}`)
      set((state) => ({
        categories: state.categories.filter(cat => cat._id !== categoryId)
      }))
      return {success: true, message:res.data.message || "Deleted Successfully"}
    } catch (error) {
      return {
        success: false,
        message: res.data.message || "Failed to Delete"
      }
    }
  },

  
  updateCategory: async (categoryId, updatedData) => {
    try {
      const res = await axios.put(`/api/categories/${categoryId}`, updatedData)
      // Optional: update in store
      set((state) => ({
        categories: state.categories.map(cat =>
          cat._id === categoryId ? res.data.data : cat
        ),
      }))
      return { success: true, message: "Updated successfully" }
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Failed to update",
      }
    }
  },
}))

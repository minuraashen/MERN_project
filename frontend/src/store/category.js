import { create } from 'zustand'

export const useCategoryStore = create((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
  selectedCategory: null,
  setSelectedCategory: (cat) => set({ selectedCategory: cat }),
  selectedSubcategory: null,
  setSelectedSubcategory: (sub) => set({ selectedSubcategory: sub }),
  selectedSubitem: null,
  setSelectedSubitem: (item) => set({ selectedSubitem: item }),
}))

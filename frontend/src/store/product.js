import { create } from "zustand"

export const useProductStore = create((set)=>({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image){
      return {success:false, message:"Please fill in all fields."}
    }
    const res = await fetch("/api/products")
  }
}));

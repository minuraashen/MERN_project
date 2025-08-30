import { create } from 'zustand'

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async(newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock || !newProduct.category || !newProduct.subcategory) {
    return {success: false, message: 'All Essentaial fields are required'};
    }
    const res = await fetch('/api/products',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
    const data = await res.json()
    set((state) => ({ products:[ ...state.products, data.data]}))
    return { success: true, message:"Product Created Successfully"}
  },

  fetchProducts: async() => {
    const res = await fetch('/api/products')
    const data = await res.json()
    set ({ products:data.data })
  },

  /*
  deleteProduct: async(pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE"
    })
    const data = await res.json()
    if (!data.success) return { success:false, message:data.message }
    //Update UI immedietly without needing a refresh
    set((state) => ({products: state.products.filter((product) => product._id != pid)}))
    return { success:true, message:data.message}
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
    const data = await res.json()
    if (!data.success) return { success:false, message:data.message }
    //Update UI immedietly without needing a refresh
    set((state) => ({products: state.products.map((product) => product._id === pid ? data.data : product)}))
    return { success:true, message:data.message }
  },

  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),

  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product]
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter(p => p._id !== productId)
    }))*/
}))



/*import { create } from "zustand"

export const useProductStore = create((set)=>({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image){
      return {success:false, message:"Please fill in all fields."}
    }
    const res = await fetch("/api/products", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newProduct)
    })
    const data = await res.json();
    set((state) => ({products:[...state.products, data.data]}));
    return {success: true, message: "Product created sucessfully"};
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data})
  },
  deleteProduct: async (pid) => {
      const res = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) return {success: false, message: data.message};
      
      // Update the UI immediately, without needing a refresh
      set((state) => ({ products: state.products.filter((product) => product._id != pid)}));
      return { success: true, message: data.message};
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct)
    });
    const data = await res.json()
    if (!data.success) return { success: false, message: data.message }

    // update the UI immedietly, without needing a refresh
    set((state) => ({
      products: state.products.map((product) => (product._id === pid ? data.data : product))
    }))
    return { success: true, message: data.message };
  }
})); */


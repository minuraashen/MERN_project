import { Box, useColorModeValue } from "@chakra-ui/react" 
import { Route, Routes } from "react-router-dom"
import Createpage from "./pages/createpage.jsx";
import Homepage from "./pages/homepage.jsx";
import Navbar from "./components/Navbar.jsx";
import SubcategoryPage from './pages/subcategorypage.jsx'
import ProductsPage from './pages/productspage.jsx'
import ProductDetailPage from './pages/productdetailpage.jsx'
import CreateProductPage from './pages/createproduct.jsx'
import CreateCategoryPage from "./pages/createcategory.jsx"

function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}> 
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/create" element={<Createpage/>} />
          <Route path="/createproduct" element={<CreateProductPage/>} />
          <Route path="/createcategory" element={<CreateCategoryPage/>} />
          <Route path="/:category" element={<SubcategoryPage />} />
          <Route path="/products/:subcategory" element={<ProductsPage />} />
          <Route path="/:category/:subcategory/:products/:productelement" element={<ProductDetailPage />} />
        </Routes>
    </Box>
  );
}

export default App

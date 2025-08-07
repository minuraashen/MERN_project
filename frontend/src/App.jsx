import { Box, useColorModeValue } from "@chakra-ui/react" 
import { Route, Routes } from "react-router-dom"
import Createpage from "./pages/createpage.jsx";
import Homepage from "./pages/homepage.jsx";
import Navbar from "./components/Navbar.jsx";
import SubcategoryPage from './pages/subcategorypage.jsx'
import SubItemPage from './pages/subitempage.jsx'
import ProductsPage from './pages/productspage.jsx'
import ProductDetailPage from './pages/productdetailpage.jsx'


function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}> 
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/create" element={<Createpage/>} />
          <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
          <Route path="/:category/:subcategory/:subitem?" element={<SubItemPage />} />
          <Route path="/:category/:subcategory/:subitem?/:products" element={<ProductsPage />} />
          <Route path="/:category/:subcategory/:subitem?/:products/:productelement" element={<ProductDetailPage />} />
        </Routes>
    </Box>
  );
}

export default App

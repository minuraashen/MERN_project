import { Box, useColorModeValue } from "@chakra-ui/react" 
import { Route, Routes } from "react-router-dom"
import Createpage from "./pages/createpage";
import Homepage from "./pages/homepage";
import Navbar from "./components/Navbar";


function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}> 
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/create" element={<Createpage/>} />
        </Routes>
    </Box>
  );
}

export default App


import { Box, Flex, Heading, Spacer, Button, HStack, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react"

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    console.log("searching for:", searchTerm)
  }

  return (
    <Box px={6} py={6} bgGradient='linear(to-r, pink.500, yellow.300)'>
      <Flex alignItems="center">
        {/*Heading*/}
        <Box p='4'>
        <Heading size={{base:"lg", lg:"xl", xl:"2xl"}} color="white">
          <Link to="/">SHOPPING STORE🛍️ </Link>
        </Heading>
        </Box>
        <Spacer/>

                {/* Search Bar */}
        <InputGroup maxW="800px" flex={8} size={{base:"sm", lg:"md", xl:"lg"}}>
          <Input
            type="text"
            placeholder="Search products..."
            bg="white"
            color="black"
            fontWeight='400'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputRightElement>
            <SearchIcon
              color="gray.800"
              cursor="pointer"
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>


        <Spacer />

        {/*Cart Button */}
        <HStack spacing={3}>
          <Button variant="outline" colorScheme="blackAlpha" size={{base:"sm", lg:"md", xl:"lg"}}>
            Cart 🛒
          </Button>
          <Button variant="outline" colorScheme="blackAlpha" size={{base:"sm", lg:"md", xl:"lg"}}>
            <Link to='/create'>Add New</Link>
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar


/* import { Container, HStack, Flex, Button, Text, useColorMode } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
     <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
        }}
      >

      <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, pink.400, purple.500)"}
          bgClip={"text"}
          >
            <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={'/create'}>
            <Button>
              <PlusSquareIcon fontSize={20}/>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
          </Button>

        </HStack>
    </Flex>
  </Container>
  )
};

export default Navbar */

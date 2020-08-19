import React from "react";
import {
    Link as ChakraLink,
    Text,
    Code,
    Icon,
    Button,
    Link,
    Heading,
    Box, Flex
  } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
export const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#28B6E8"
      color="white"
      position="absolute"
      width="100%"
      {...props}
    >
      <Flex align="center" mr={5}>
      
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
      <Link href="/">
          CourseDigital
          </Link>
        </Heading>
       
        
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
        <ChakraLink
      isExternal
      href="https://www.instagram.com/coursedigital.store/"
    >Instagram</ChakraLink></MenuItems>
        <MenuItems><ChakraLink
      isExternal
      href="https://www.instagram.com/stories/highlights/18073349329206654/"
    >Testimoni</ChakraLink></MenuItems>
        
        
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
          <ChakraLink
      isExternal
      href="https://wa.me/6287718075637?text=Halo%20min!%20Saya%20tertarik%20dengan%20Course%20Udemynya"
      flexGrow={3}
      mx={2}
    >
        <Button bg="transparent" border="1px">
          Beli
        </Button>
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Header;

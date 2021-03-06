import React from "react";
import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  Button,
  Link,
  Heading, 
  Select,
  Box, Flex
} from "@chakra-ui/core";
import { Container } from './Container'

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
      shadow="xl"
      bg="#fff"
      color="black"
      position="absolute"
      width="100%"
      {...props}
    >


      {/* <Container
        spacing="1.5rem"
        width="100%"
        maxWidth="100%"
        bg="#fff"
        bgPos="center"
        bgSize="cover"
        color="black"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        
   </Container> */}
      <Container
        spacing="1.5rem"
        width="100%"
        maxWidth="100%"
        bg="#fff"
        bgPos="center"
        bgSize="cover"
        color="black"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        fontWeight="bold"
        mb="2"
        align="left"
      >
          <Box w={["85px", "100px", "125px", "150px"]}>
          <Link href="/">
            <img src={"static/logo.png"} />
          </Link>

        </Box>
         <MenuItems>
         <Link href="/">Home</Link></MenuItems>
        <MenuItems>
          <ChakraLink
            isExternal
            href="https://www.instagram.com/kioscourse/"
           
          >Instagram</ChakraLink></MenuItems>
        <MenuItems><ChakraLink
          isExternal
          href="https://www.instagram.com/stories/highlights/18073349329206654/"
        >Testimoni</ChakraLink></MenuItems>
        <MenuItems><ChakraLink
          isExternal
          href="https://wa.me/6287718075637?text=Halo%20min!%20Saya%20tertarik%20dengan%20Course%20yang%20dijual"
           
        >Contact</ChakraLink></MenuItems>
      </Container>

    
    </Flex>
  );
};

export default Header;

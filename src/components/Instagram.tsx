import { Link as ChakraLink, Flex, Heading, Box, Button, Icon, Text, Stack } from '@chakra-ui/core'
import React from 'react'
import { Container } from './Container'

export const Instagram = ({ title }) => (



    <Container
        spacing="1.5rem"
        width="100%"
        maxWidth="100%"
        bgPos="center"
        bgSize="cover"
        color="black"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
    >
         
        <Box w={["50%", "30%", "20%", "20%"]} m={"5"} ml="5" textAlign="center">
        <ChakraLink
        isExternal
        href="https://www.instagram.com/coursedigital.store/"
      >  <img src={"static/igkiri.jpg"} /></ChakraLink>
           
        </Box>


        <Box w={["50%", "30%", "20%", "20%"]} m={"5"} textAlign="center">
        <ChakraLink
        isExternal
        href="https://www.instagram.com/coursedigital.store/"
      >  <img src={"static/igtengah.jpg"} /></ChakraLink>
           
        </Box>


        <Box w={["50%", "30%", "20%", "20%"]} m={"5"} textAlign="center">
        <ChakraLink
        isExternal
        href="https://www.instagram.com/coursedigital.store/"
      >  <img src={"static/igkanan.jpg"} /></ChakraLink>
           
        </Box>


    </Container>





)

Instagram.defaultProps = {
    title: 'with-chakra-ui',
}

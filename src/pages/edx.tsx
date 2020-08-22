import {
    Link as ChakraLink,
    Text,
    Code,
    Icon,
    List,
    ListIcon,
    ListItem,
    Box, Button, Flex
  } from "@chakra-ui/core";
  import Link from 'next/link'
  
  import { HomeBan } from "../components/homeBanner";
  import { Testimoni } from "../components/Testimoni";
  import { Instagram } from "../components/Instagram";
  import { Header } from "../components/Header";
  import { SmallHero } from "../components/SmallHero";
  import { Container } from "../components/Container";
  import { HomeCard } from "../components/HomeCard";
  import { Main } from "../components/Main";
  import { DarkModeSwitch } from "../components/DarkModeSwitch";
  import { CTA } from "../components/CTA";
  import { Footer } from "../components/Footer";
  import React from 'react';
  import { PlatformCard } from "../components/PlatformCard";
  import Head from 'next/head'
  
  
  
  const edx = () => (
    <Box width="100%">
      <Header />
      <Container >
  
  
      <Flex justifyContent="center" alignItems="center" mt="20" w="100%" pt="20">
    <Box
      width={[
        "95%", // base
        "80%", // 480px upwards
        "65%", // 768px upwards
        "35%", // 992px upwards
      ]}

      
      bgImage="url('static/banner.png')"
      bgPos="center"
      bgSize="cover"
      rounded="lg"
      color="white"
      mt={[
        "5", // base
        "5", // 480px upwards
        "10", // 768px upwards
        "20", // 992px upwards
      ]}
    >
        <img src="static/edxstory.jpg"/> 
     
      
    </Box>
    <Box>

    </Box>


  </Flex>
       
        <Main justifyContent="center" alignItems="center" mt="10">
  
         
  
  
        </Main>
       
        <Box
  
          mt="10"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          fontSize={["sm", "md", "xl", "30px"]}
          color="#0C5EDE"
        // isTruncated
        >
            <ChakraLink
          isExternal
          href="https://wa.me/6287718075637?text=Halo%20min!%20Saya%20tertarik%20dengan%20Course%20yang%20dijual"
           
        > <Button width="fill" variant="solid" bg="#0C5EDE" color="white" ml="10" rounded="full" mt="2">
        Beli
      </Button></ChakraLink>
        
            </Box>
       
        <Footer>
          <Text> © 2020 CourseDigital.store | Powered by-
          <ChakraLink
              isExternal
              href="/"
              color="#28B6E8"
            >neodroid</ChakraLink></Text>
  
        </Footer>
  
      </Container>
    </Box>
  );
  
  export default edx;
  
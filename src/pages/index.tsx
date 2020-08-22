import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Box, theme, Flex
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



const Index = () => (
  <Box width="100%">
    <Header />
    <Container >


      <HomeBan />
      <Box

        mt="10"
        fontWeight="bold"
        as="h4"
        lineHeight="tight"
        fontSize={["sm", "md", "xl", "30px"]}
        color="#0C5EDE"
      // isTruncated
      >
        Choose Course Platform
          </Box>
      <Box
        fontWeight="bold"
        as="h4"
        lineHeight="tight"
        fontSize={["10px", "sm", "sm", "sm"]}
        color="#65361C"
      // isTruncated
      >
        Any platform you like, just one click away!
          </Box>
      <Main justifyContent="center" alignItems="center" mt="10">

        <Container flexDirection="row"
          flexWrap="wrap"
          bottom="0"
          width="100%"
          flex="1"
          justifyContent="center"
          py={2}>
          <PlatformCard
            img={"/static/udemy.png"}
            title={"UDEMY.COM"}
            price={"Start From Rp. 35.000-"}
            link={"/udemy"}

          />
          <PlatformCard
            img={"static/skillshare.png"}
            title={"SKILLSHARE.COM"}
            price={"Start From Rp. 70.000-"}
            link={"/skillshare"}


          />

          <PlatformCard
            img={"static/coursera.png"}
            title={"COURSERA.COM"}
            price={"Start From Rp. 40.000-"}
            link={"/coursera"}


          />
          <PlatformCard
            img={"static/edx.png"}
            title={"EDX.ORG"}
            price={"40% Discount All Course"}
            link={"/edx"}

          />
          <PlatformCard
            img={"static/masterclass.png"}
            title={"MASTERCLASS.COM"}
            price={"Start From Rp. 139.000-"}
            link={"/masterclass"}

          />
          <PlatformCard
            img={"static/lynda.png"}
            title={"LYNDA.COM"}
            price={"Start From Rp. 85.000-"}
            link={"/lynda"}

          />

        </Container>


      </Main>
      <Flex w="100%" bg="yellow" mt="20px">
        <Testimoni />
      </Flex>
      <Box

        mt="10"
        fontWeight="bold"
        as="h4"
        lineHeight="tight"
        fontSize={["sm", "md", "xl", "30px"]}
        color="#0C5EDE"
      // isTruncated
      >
        Instagram
          </Box>
      <Box
        fontWeight="bold"
        as="h4"
        lineHeight="tight"
        fontSize={["10px", "sm", "sm", "sm"]}
        color="#65361C"
      // isTruncated
      >
        Follow us for information update
          </Box>
      <Instagram />
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

export default Index;

import { Link as ChakraLink, Flex, Heading, Box, Button, Icon, Text, Stack, } from '@chakra-ui/core'
import React from 'react'
import { Container } from './Container'

export const Testimoni = ({ title }) => (



  <Container
    spacing="1.5rem"
    width="100%"
    maxWidth="100%"
    bg="#DFECFF"
    bgPos="center"
    bgSize="cover"
    color="black"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
  >
    <Box w={["50%", "25%", "20%", "20%"]} m={"5"} ml="5" textAlign="center">
      <Box
        fontSize={["xl", "xl", "xl", "30px"]}
        fontWeight="bold"
        w="90%"
      >What our customers saying</Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
      ><Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
         from 99 reviews</Box>
      <ChakraLink
        isExternal
        href="https://www.instagram.com/coursedigital.store/"
      > <Button width="fill" variant="solid" bg="#0C5EDE" color="white" rounded="full" mt="2">
          All Reviews
        </Button></ChakraLink>

    </Box>


    <Box w={["50%", "40%", "20%", "20%"]} m={"5"} textAlign="center">
      <Box
        fontSize={["sm", "sm", "md", "md"]}
      //  fontWeight="bold"

      >"Awalnya sebelum tau ada yang jual course, hidupku useless banget, tapi setelah beli course di @coursedigital.store hidupku terasa lebih bermanfaat"</Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
      ><Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
      </Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
        fontWeight="semibold"
      >abdurrahmanfais</Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
      >udemy course</Box>
    </Box>


    <Box w={["50%", "40%", "20%", "20%"]} m={"5"} textAlign="center">
      <Box
        fontSize={["sm", "sm", "md", "md"]}
      //  fontWeight="bold"

      >"Ownernya baik banget, terus harga nya murah banget, cocok buat sobat ambis atau gabut yang mau cari ilmu. Keren deh salut"</Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
      ><Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
      </Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
        fontWeight="semibold"
      >ngel_sy</Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
      >udemy course</Box>
    </Box>

    <Box w={["50%", "40%", "20%", "20%"]} m={"5"} textAlign="center">
      <Box
        fontSize={["sm", "sm", "md", "md"]}
      //  fontWeight="bold"

      >"Uwoo sangat fastresp dan trusted, support bgt buat pelajar yang pengen belajar tapi kantong low budget, thank you"</Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
      ><Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
        <Icon name="star" color="#FFD700" />
      </Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
        fontWeight="semibold"
      >jihaan_n</Box>
      <Box
        fontSize={["sm", "sm", "sm", "md"]}
      >udemy course</Box>
    </Box>

  </Container>





)

Testimoni.defaultProps = {
  title: 'with-chakra-ui',
}

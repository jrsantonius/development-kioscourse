import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'
import { Container } from './Container'


function scrollWin() {
  window.scrollBy(0, 450);
}

export const HomeBan = ({ title }) => (

  

  <Flex justifyContent="center" alignItems="center" mt="20" w="100%" pt="20">
    <Box
      width={[
        "95%", // base
        "80%", // 480px upwards
        "80%", // 768px upwards
        "70%", // 992px upwards
      ]}

      height={[
        "200px", // base
        "200px", // 480px upwards
        "300px", // 768px upwards
        "400px", // 992px upwards
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

      <Box
        ml="10"
        mt={["5", "10", "10", "20"]}
        fontSize={["xl", "xl", "xl", "50px"]}
        fontWeight="bold"
      >Course Digital Store</Box>
      <Box
        ml="10"

        fontSize={["sm", "sm", "sm", "xl"]}
      >Place where you can learn new knowledge easily.</Box>
      <Button width="fill" variant="solid" bg="#0C5EDE" color="white" ml="10" rounded="lg" mt="2" onClick={scrollWin}>
        Choose Courses <Icon name="chevron-down" size="30px" />
      </Button>
    </Box>
    <Box>

    </Box>


  </Flex>


)

HomeBan.defaultProps = {
  title: 'with-chakra-ui',
}

import { Flex, Heading, Text } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" marginTop="200px"  color="black">
    <Heading fontSize="4vw" >{title}</Heading> 
    {/* <Text fontSize="4vw" >{title}</Text> */}
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}

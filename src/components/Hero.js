import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="60vh"  color="black">
    <Heading fontSize="4vw" >{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}

import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="90vh"  color="#0C5EDE">
    <Heading fontSize="9vw" >{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}

import { Flex, Text } from '@chakra-ui/core'

export const Subhero = ({ subtitle }) => (
  <Flex justifyContent="center" alignItems="center" height="10vh"  color="black">
    <Text fontSize="4vw" >{subtitle}</Text> 
  </Flex>
)

Subhero.defaultProps = {
  subtitle: 'with-chakra-ui',
}

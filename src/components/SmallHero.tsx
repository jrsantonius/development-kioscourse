import { Flex, Heading } from '@chakra-ui/core'
import { Container } from './Container'

export const SmallHero = ({ title }) => (
    
        <Flex justifyContent="center" alignItems="center" height="90vh">
      
      <Heading fontSize="9vw" color="#28B6E8">CourseDigital</Heading>
      <Heading fontSize="5vw" >.store</Heading>
      
      
      
    
    </Flex>
    
  
)

SmallHero.defaultProps = {
  title: 'with-chakra-ui',
}

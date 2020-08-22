
import { Link as ChakraLink, Button,Flex, useColorMode, Box, Icon, Link, Alert,AlertIcon} from '@chakra-ui/core'
import { Badge } from "reactstrap";

import { Container } from './Container'


export const PlatformCard = (props) => {
  const property = {
    

    imageUrl: props.img,
    imageAlt: props.imgAlt,
    bintang: props.star,
    baths: 2,
    title: props.title,
    formattedPrice: props.price,
    reviewCount: props.review,
    rating: 4,
    link:props.link,

  };

  const birthday = new Date();
  const date1 = birthday.getDate();


  return (
    
    
    <Box maxW="300px" borderWidth="1px" rounded="lg" overflow="hidden" m={2} backgroundColor="#F7FAFC" borderColor="A0AEC0" >
      <img src={property.imageUrl} alt={property.imageAlt}  />
     
      <Container p="6"  alignItems="center">
      
     
        <Box 
        as="span" color="gray.600" fontSize="sm"
         
        alignItems="center"
          
         // isTruncated
        >
          {property.title} 
        </Box>
    
          <Box   mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight">
         
            {property.formattedPrice}
          </Box>
          <Link
    
    href={property.link}
     
  >
         <Button width="fill" variant="solid" bg="#0C5EDE" color="white"  rounded="full"  mt="2"> 
        Choose Courses
      </Button>
      </Link> 
      </Container>
      
    </Box>
   
  );
};


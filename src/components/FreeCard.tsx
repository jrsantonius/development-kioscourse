
import { Link as ChakraLink, Button,Flex, useColorMode, Box, Icon, Alert,AlertIcon, Input} from '@chakra-ui/core'
import { Badge } from "reactstrap";
import { Container } from "../components/Container";
import { useClipboard } from "@chakra-ui/core";
import React from 'react';

function Example(props) {
    const [value, setValue] = React.useState(props);
    const { onCopy, hasCopied } = useClipboard(value);
  
    return (
      <>
        <Flex mb={2}>
          <Input value={value} isReadOnly placeholder="Welcome" borderColor="#EC5252"/>
          <Button onClick={onCopy} ml={2} variant="solid" bg="#EC5252" color="white">
            {hasCopied ? "Copied" : "Copy"}
          </Button>
        </Flex>
      
      </>
    );
  }

export const FreeCard = (props) => {

    

  const property = {
    

    imageUrl: props.img,
    imageAlt: props.imgAlt,
    bintang: props.star,
    tenggat: props.time,
    title: props.title,
    formattedPrice: props.price,
    reviewCount: props.review,
    rating: 4,
    linkUdemy: props.linkUdemy,

  };

  
  const timeNow = new Date();
  const deadline = new Date(property.tenggat);
  const jam = timeNow.getUTCHours(); 
  const tenggathari = deadline.getDate()- timeNow.getUTCDate();
  const tenggatjam = deadline.getHours()-jam ;
  const tenggatmenit =  deadline.getMinutes()-timeNow.getUTCMinutes();
  var deadhari = false;
  var deadjam=false;
  var deadmenit=false;
  console.log(tenggathari);

  var sisajam=tenggatjam;
  var sisahari=tenggathari;
  var sisamenit=tenggatmenit;

  if(tenggathari==0){
   // sisajam = 24 - tenggatjam;
    
  }
  
  if(tenggatjam==1){
    sisamenit = 60+deadline.getMinutes() - timeNow.getUTCMinutes();
    sisajam =0;
  }
  if(tenggathari==1){
    sisajam = 24+deadline.getHours() - timeNow.getUTCHours();
    sisahari =0;
  }

  if(sisahari<=1){
    deadhari=true;
    if(sisajam<=12){
      deadjam=true;
      if(sisajam<=1){
        deadmenit=true;
      }
    }
  }

  var sisa = "sisa "+sisahari+" hari "+sisajam+" jam "+sisamenit+" menit";
  
  var captionjam = "Promo berakhir dalam "+sisajam+" Jam";
  
  var captionhari = "Promo berakhir dalam "+sisahari+" hari";
  
  var captionmenit = "Promo berakhir dalam "+sisamenit+" menit";

  

  
{/* <Alert status="error">
    <AlertIcon />
    Promo Sisa 4 Jam
    </Alert> */}
  


  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={2} >

{deadmenit ? 
  <Alert status="error">
        <AlertIcon />
        {captionmenit}
        </Alert>
         : 
         deadjam ?
         <Alert status="error">
        <AlertIcon />
        {captionjam}
        </Alert> :
       <Box/>
        }
    

      <img src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
         // isTruncated
        >
          {property.title}
        </Box>
        {Example(property.linkUdemy)}
     
      </Box>
      
    </Box>
    
  );
};

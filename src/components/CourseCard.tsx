
import { Link as ChakraLink, Button, Flex, useColorMode, Box, Icon, Alert, AlertIcon } from '@chakra-ui/core'
import { Badge } from "reactstrap";


export const CourseCard = (props) => {
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
  const tenggathari = deadline.getDate() - timeNow.getUTCDate();
  const tenggatjam = deadline.getHours() - jam;
  const tenggatmenit = deadline.getMinutes() - timeNow.getUTCMinutes();
  var deadhari = false;
  var deadjam = false;
  var deadmenit = false;
  console.log(tenggathari);

  var sisajam = Math.round(tenggatjam);
  var sisahari = Math.round(tenggathari);
  var sisamenit = Math.round(tenggatmenit);

  if (tenggathari == 0) {
    // sisajam = 24 - tenggatjam;

  }

  if (tenggatjam == 1) {
    sisamenit = 60 + deadline.getMinutes() - timeNow.getUTCMinutes();
    sisajam = 0;
  }
  if (tenggathari == 1) {
    sisajam = 24 + deadline.getHours() - timeNow.getUTCHours();
    sisahari = 0;
  }

  // if (sisahari <= 1) {
  //   deadhari = true;
  //   if (sisajam <= 12) {
  //     deadjam = true;
  //     if (sisajam <= 1) {
  //       deadmenit = true;
  //     }
  //   }
  // }
  if (sisahari < 1){
    sisahari=0;
  }

  if (sisajam < 1){
    sisajam=0;
  } else if (sisajam >= 24){
    sisajam=sisajam % 24;
    sisahari+=sisajam  / 24;
  }

  if (sisamenit < 1){
    sisamenit=0;
  } else if (sisamenit >= 60){
    sisamenit=sisamenit % 60;
    sisajam+=sisamenit / 60;
  }

  var sisa = "Promo only in ";
  if (sisahari==0){

  } else if(sisahari>=1) {
    sisa+= sisahari + " day(s) ";
  }

  if (sisajam==0){

  } else if (sisajam>=1) {
    sisa+= sisajam + " hour(s) ";
  }

  if (sisamenit==0){

  } else if (sisamenit>=1) {
    sisa+= sisamenit + " minute(s) ";
  }



  // var captionjam = "Promo berakhir dalam " + sisajam + " Jam";

  // var captionhari = "Promo berakhir dalam " + sisahari + " hari";

  // var captionmenit = "Promo berakhir dalam " + sisamenit + " menit";







  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={2} shadow="xl">
        <Alert status="error">
          <AlertIcon />
          {sisa}
        </Alert>
          <Box />
  


      <img src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">


        <Box
          mt="1"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          fontSize="xl"
        // isTruncated
        >
          {property.title}
        </Box>
        <Box d="flex" alignItems="baseline" fontWeight="semibold" mt="2">
          <Badge rounded="full" px="2" variantColor="teal" >
            Rp.35.000- or $2.5 USD
          </Badge>

        </Box>



        <Box as="del" fontSize="sm" fontWeight="semibold" color="#EC5252">

         Normal price ${property.formattedPrice} USD or Rp {property.formattedPrice.toFixed() * 14851}
          
        </Box>


        <Box d="flex" mt="2" alignItems="center">



          {/* <Box  color="orange.400" /> */}
          <Icon name="star" color="orange.400" />
          <Box as="span" color="gray.600" fontSize="sm">
            {property.bintang} ( {property.reviewCount} reviews )
          </Box>



        </Box>



        <Box mt="2">
          <ChakraLink
            isExternal
            href="https://wa.me/6287718075637?text=Halo%20min!%20Saya%20tertarik%20dengan%20Course%20Udemy%20yang%20dijual"
            flexGrow={3}
            mx={2}
          >
            <Button width="45%" variant="solid" bg="#EC5252" color="white">
              Buy
            </Button>
          </ChakraLink>
          <ChakraLink isExternal href={property.linkUdemy} flexGrow={1} mx={2}>
            <Button width="45%" variant="outline" variantColor="green" color="#EC5252">
              Check Syllabus
             </Button>
          </ChakraLink>
        
        </Box>
        
      </Box>

    </Box>
  );
};

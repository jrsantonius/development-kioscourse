
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

  var sisajam = tenggatjam;
  var sisahari = tenggathari;
  var sisamenit = tenggatmenit;

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

  if (sisahari <= 1) {
    deadhari = true;
    if (sisajam <= 12) {
      deadjam = true;
      if (sisajam <= 1) {
        deadmenit = true;
      }
    }
  }

  var sisa = "sisa " + sisahari + " hari " + sisajam + " jam " + sisamenit + " menit";

  var captionjam = "Promo berakhir dalam " + sisajam + " Jam";

  var captionhari = "Promo berakhir dalam " + sisahari + " hari";

  var captionmenit = "Promo berakhir dalam " + sisamenit + " menit";







  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={2} shadow="xl">

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
          <Box />
      }


      <img src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">


        <Box
          mt="1"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
        // isTruncated
        >
          {property.title}
        </Box>
        <Box d="flex" alignItems="baseline" fontWeight="semibold" mt="2">
          <Badge rounded="full" px="2" variantColor="teal" >
            Rp.35.000- hanya di CourseDigital
          </Badge>

        </Box>



        <Box as="del" fontSize="sm" fontWeight="semibold" color="#EC5252">

          ${property.formattedPrice} USD
          </Box>



        <Box d="flex" mt="2" alignItems="center">



          {/* <Box  color="orange.400" /> */}
          <Icon name="star" color="orange.400" />
          <Box as="span" color="gray.600" fontSize="sm">
            {property.bintang} ( {property.reviewCount} reviews )
          </Box>



        </Box>
        <Box mt="1">
          <ChakraLink
            isExternal
            href="https://wa.me/6287718075637?text=Halo%20min!%20Saya%20tertarik%20dengan%20Course%20Udemy%20yang%20dijual"
            flexGrow={3}
            mx={2}
          >
            <Button width="100%" variant="solid" bg="#EC5252" color="white">
              Beli
      </Button>
          </ChakraLink>

        </Box>
        <Box mt="1">
          <ChakraLink isExternal href={property.linkUdemy} flexGrow={1} mx={2}>
            <Button width="100%" variant="outline" variantColor="green" color="#EC5252">
              Cek Silabus
      </Button>
          </ChakraLink>
        </Box>

      </Box>

    </Box>
  );
};

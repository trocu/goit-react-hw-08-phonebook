import { Avatar, Box, Flex, Grid, GridItem, Heading, Img, Text } from '@chakra-ui/react';
import bell from '../../assets/bell.webp';
import phoneT from '../../assets/phoneT.webp';

const Home = () => {
  return (
    <Box
      as='main'
      height='100vh'
      // pl={15}
      maxW='32rem'
    >
      <Grid
        h='100vh'
        w='100vw'
        templateColumns='1fr 1fr'
      >
        <GridItem pl={15}>
          <Heading
            as='h1'
            size='3xl'
            color='red.500'
            fontWeight='bold'
            textAlign='left'
            mt='10'
          >
            Phonebook
          </Heading>
          <Heading
            as='h2'
            size='2xl'
            color='gray.700'
            textAlign='left'
          >
            Your personal contact database
          </Heading>
          <Box mt='10'>
            <Flex spacing='4'>
              <Flex
                gap='4'
                alignItems='center'
                flexWrap='wrap'
              >
                <Avatar
                  size='lg'
                  name='Segun Adebayo'
                  src={bell}
                />

                <Box>
                  <Heading
                    size='sm'
                    as='i'
                    color='gray.600'
                  >
                    “Mr. Watson – Come here – I want to see you.”
                  </Heading>
                  <Text
                    fontSize='sm'
                    color='gray.500'
                  >
                    [First intelligible words spoken over the telephone]
                  </Text>
                  <Text
                    color='red.500'
                    fontWeight='semibold'
                  >
                    - Alexander Graham Bell
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Img
            src={phoneT}
            alt='Phone'
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;

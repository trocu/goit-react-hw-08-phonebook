import { Box, Heading, Img, Text } from '@chakra-ui/react';
import chesterton from '../../assets/chesterton.webp';
const Home = () => {
  return (
    <Box
      as='main'
      height='100vh'
      p={15}
      maxW='32rem'
    >
      {/* <Img
        boxSize='100vw'
        objectFit='cover'
        src=''
        alt=''
      /> */}
      <Heading
        as='h1'
        size='3xl'
        color='red.500'
        fontWeight='bold'
        textAlign='left'
      >
        Phone book
      </Heading>
      <Heading
        as='h2'
        size='2xl'
        color='gray.700'
        textAlign='left'
      >
        Your personal contact database
      </Heading>
      <Text></Text>
      <Img src={chesterton} />
    </Box>
  );
};

export default Home;

import { Box, Img } from '@chakra-ui/react';
const Home = () => {
  return (
    <Box
      as='main'
      bg='gray'
      height='100vh'
    >
      <Img
        boxSize='100vw'
        objectFit='cover'
        src='https://pixabay.com/get/gd1da555e52664c91c7f610c99a573d9131c9245edc6483759588468521c8f0b6ee133479dfed84bf04e24561c274abeabeb4c4fcb9ff9c4dbf1ebc7bd13c95ac_1920.jpg'
        alt='Dan Abramov'
      />
      Home
    </Box>
  );
};

export default Home;

import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import bell from '../../assets/bell.webp';

const Home = () => {
  return (
    <Box
      as='main'
      height='100vh'
      p={15}
      maxW='32rem'
    >
      <Heading
        as='h1'
        size='3xl'
        color='red.500'
        fontWeight='bold'
        textAlign='left'
        mt='10'
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
    </Box>
  );
};

export default Home;

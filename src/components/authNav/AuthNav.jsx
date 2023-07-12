import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <Box>
      <HStack spacing='15px'>
        <NavLink to='/register'>
          <ChakraLink
            as='span'
            color='gray.700'
            fontWeight='medium'
            _hover={{ color: 'red.500', textDecoration: 'none' }}
          >
            Register
          </ChakraLink>
        </NavLink>
        <NavLink to='/login'>
          <ChakraLink
            as='span'
            color='gray.600'
            fontWeight='medium'
            _hover={{ color: 'red.500', textDecoration: 'none' }}
          >
            Log in
          </ChakraLink>
        </NavLink>
      </HStack>
    </Box>
  );
};

export default AuthNav;

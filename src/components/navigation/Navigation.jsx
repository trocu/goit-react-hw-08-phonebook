import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  console.log('Navigation', isLoggedIn);
  return (
    <Box as='nav'>
      <HStack spacing='5px'>
        <NavLink to='/'>
          <ChakraLink
            as='span'
            color='gray.700'
            fontWeight='semibold'
            _hover={{ color: 'red.500', textDecoration: 'none' }}
          >
            Home
          </ChakraLink>
        </NavLink>
        {isLoggedIn && (
          <NavLink to='/contacts'>
            {' '}
            <ChakraLink
              as='span'
              color='gray.700'
              fontWeight='semibold'
              _hover={{ color: 'red.500', textDecoration: 'none' }}
            >
              Contacts
            </ChakraLink>
          </NavLink>
        )}
      </HStack>
    </Box>
  );
};

export default Navigation;

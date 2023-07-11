import { Box, Flex } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import AuthNav from '../authNav/AuthNav';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
// import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  console.log('AppBar:', isLoggedIn);
  return (
    <Box
      as='header'
      // width='100%'
      p={15}
    >
      <Flex justify='space-between'>
        <Navigation />
        <HStack>{isLoggedIn ? <UserMenu /> : <AuthNav />}</HStack>
      </Flex>
    </Box>
  );
};

export default AppBar;

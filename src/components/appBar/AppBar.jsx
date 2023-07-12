import { Box, Flex } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import AuthNav from '../authNav/AuthNav';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as='header'
      p={15}
    >
      <Flex
        justify='space-between'
        align='center'
      >
        <Navigation />
        <HStack>{isLoggedIn ? <UserMenu /> : <AuthNav />}</HStack>
      </Flex>
    </Box>
  );
};

export default AppBar;

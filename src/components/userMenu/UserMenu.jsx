import { useDispatch } from 'react-redux';
import { Text, Box } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <>
      <p>
        Welcome,{' '}
        <Text
          as='span'
          color='gray.700'
          fontWeight='bold'
          textTransform='uppercase'
        >
          {user.name}
        </Text>
      </p>
      <Box
        as='button'
        width='100px'
        p={1}
        bg='red.500'
        fontWeight='semibold'
        fontSize='14px'
        color='white'
        border='1px solid red.500'
        borderRadius='25px'
        cursor='pointer'
        transition='transform 250ms'
        boxShadow='0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
        _hover={{
          boxShadow:
            '0px 2px 4px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 2px 0px rgba(0, 0, 0, 0.12)',
          transform: 'translateY(-1px)',
        }}
        onClick={() => dispatch(logOut())}
      >
        Sign out
      </Box>
    </>
  );
};

export default UserMenu;

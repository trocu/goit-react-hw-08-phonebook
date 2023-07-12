import { useDispatch } from 'react-redux';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <Flex
        direction='column'
        align='center'
        gap='10px'
        mt='25px'
      >
        <FormControl maxW='400px'>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <EmailIcon color='gray.300' />
            </InputLeftElement>
            <Input
              type='email'
              name='email'
              focusBorderColor='red.500'
            />
          </InputGroup>
        </FormControl>

        <FormControl maxW='400px'>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <LockIcon color='gray.300' />
            </InputLeftElement>
            <Input
              type='password'
              name='password'
              focusBorderColor='red.500'
            />
          </InputGroup>
        </FormControl>

        <Box
          as='button'
          type='submit'
          width='120px'
          p={1}
          mt='20px'
          bg='red.500'
          fontWeight='semibold'
          fontSize='14px'
          color='white'
          border='1px solid red.500'
          borderRadius='25px'
          transition='transform 250ms'
          boxShadow='0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          _hover={{
            boxShadow:
              '0px 2px 4px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 2px 0px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-1px)',
          }}
        >
          Log in
        </Box>
      </Flex>
    </form>
  );
};

export default LoginForm;

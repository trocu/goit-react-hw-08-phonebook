import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Heading, Text } from '@chakra-ui/react';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactList from '../../components/contactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      p={15}
      align='center'
    >
      <Heading
        as='h2'
        size='xl'
        color='gray.700'
        textAlign='center'
        mt='25px'
      >
        Phonebook
      </Heading>
      <ContactForm />
      <Heading
        as='h2'
        size='xl'
        color='gray.700'
        textAlign='center'
        mt='45px'
      >
        Contacts
      </Heading>
      <Filter />
      {error && (
        <Text
          fontSize='md'
          mt='10px'
          color='gray.600'
        >
          Whoops, something went wrong
        </Text>
      )}
      {isLoading && !error && (
        <Text
          fontSize='md'
          mt='10px'
          color='gray.600'
        >
          Loading...
        </Text>
      )}
      {!isLoading && <ContactList />}
    </Box>
  );
};

export default Contacts;

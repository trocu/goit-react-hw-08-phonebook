import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactList from '../../components/contactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { Heading } from '@chakra-ui/react';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Heading
        as='h2'
        size='lg'
        color='gray.700'
        textAlign='center'
        mt='25px'
      >
        Phonebook
      </Heading>
      <ContactForm />
      <Heading
        as='h2'
        size='lg'
        color='gray.700'
        textAlign='center'
        mt='25px'
      >
        Contacts
      </Heading>
      <Filter />
      {error && <p>Whoops, something went wrong</p>}
      {isLoading && !error && <div>Loading...</div>}
      {!isLoading && <ContactList />}
    </>
  );
};

//Add Loader instead loading div

export default Contacts;

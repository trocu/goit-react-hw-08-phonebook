import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      Report.info(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        direction='column'
        align='center'
        gap='10px'
      >
        <FormControl maxW='400px'>
          <FormLabel>Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <Icon
                as={FaUser}
                color='gray.300'
              />
            </InputLeftElement>
            <Input
              focusBorderColor='red.500'
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputGroup>
        </FormControl>

        <FormControl maxW='400px'>
          <FormLabel>Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <PhoneIcon color='gray.300' />
            </InputLeftElement>
            <Input
              focusBorderColor='red.500'
              type='tel'
              name='number'
              value={number}
              onChange={handleChange}
              // pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              required
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
          Add contact
        </Box>
      </Flex>
    </form>
  );
};

export default ContactForm;

import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <Box
      mt='25px'
      display='flex'
      flexDirection='column'
      align='center'
    >
      {filteredContacts.length === 0 ? (
        <Text
          fontSize='md'
          color='gray.600'
        >
          The phonebook is empty
        </Text>
      ) : (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <li
              key={id}
              style={{ listStyleType: 'none' }}
            >
              <Card
                maxW='400px'
                mt='10px'
              >
                <CardBody>
                  <Stack
                    divider={<StackDivider />}
                    spacing='4'
                  >
                    <Box>
                      <Flex
                        justify='space-between'
                        align='center'
                      >
                        <Box>
                          <Heading
                            size='xs'
                            textTransform='uppercase'
                          >
                            {name}
                          </Heading>
                          <Text
                            pt='2'
                            fontSize='sm'
                            align='left'
                            color='red.500'
                          >
                            {number}
                          </Text>
                        </Box>
                        <Tooltip
                          hasArrow
                          label='Delete'
                          bg='red.500'
                        >
                          <IconButton
                            id={id}
                            aria-label='Delete button'
                            onClick={handleDelete}
                            color='gray.500'
                            colorScheme='white'
                            size='sm'
                            _hover={{ color: 'red.500' }}
                          >
                            <CloseIcon pointerEvents='none' />
                          </IconButton>
                        </Tooltip>
                      </Flex>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default ContactList;

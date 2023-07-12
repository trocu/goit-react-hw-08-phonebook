import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { selectFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <Box>
      <Flex
        direction='column'
        align='center'
        gap='10px'
      >
        <FormControl maxW='400px'>
          <FormLabel
            textAlign='center'
            mr='0'
            mt='25px'
            fontSize='md'
            color='gray.600'
          >
            Find contacts by name
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='gray.300' />
            </InputLeftElement>
            <Input
              focusBorderColor='red.500'
              type='text'
              name='filter'
              value={filter}
              onChange={handleSearch}
            />
          </InputGroup>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Filter;

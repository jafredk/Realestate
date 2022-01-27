import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';



const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
             onClick={() => setSearchFilters(!searchFilters)}
             cursor='pointer'
             bg='gray.100'
             borderBottom='1px'
             borderColor='gray.200'
             p='2'
             fontWeight='black'
             fontSize='lg'
             justifyContent='center'
             alignItems='center'
            >

            </Flex>
        </Box>
    )        
}

export default Search;
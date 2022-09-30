import { useState } from 'react';

import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Tooltip,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Link,
} from '@chakra-ui/react';

import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);
const CFaEyeSlash = chakra(FaEyeSlash);

export default function Login({ setPass }) {
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handlePassword = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    };

    fetch('/api/authenticate', requestOptions).then((result) => {
      result.status === 200 ? setPass(true) : setPass(false);
    });
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      TESTEEEEEE
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.500" />
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
            <Stack spacing={4} p="1rem" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    height="100%"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    size="lg"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite a palavra-chave"
                    onChange={handlePassword}
                  />
                  <InputRightElement width="4.5rem" height="100%">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <CFaEyeSlash /> : <CFaEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Tooltip
                    label="Manda um salve no slack"
                    aria-label="Manda um salve no slack"
                    placement="right"
                  >
                    <Link>Esqueceu?</Link>
                  </Tooltip>
                </FormHelperText>
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
                size="lg"
                onClick={handleSubmit}
              >
                Prosseguir
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

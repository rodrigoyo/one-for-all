import {
  Flex,
  Stack,
  Box,
  Heading,
  Spacer,
  Link,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react'

export default function Records({ list }) {
  const [copied, setCopied] = useState('')
  const lastClass = list.length > 5 ? list[list.length - 1] : false;
  
  const copyToClipboard = async (e) => {
    await navigator.clipboard.writeText(e.target.innerText);
    for ( let element of document.querySelectorAll(".copy__Alert") ) {
      element.style.display = "none"
    }
    setCopied("Link copiado com sucesso")
    e.target.nextSibling.style.display = "block"
  }

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading color="blue.400">Gravações das aulas</Heading>
      <Stack
        flexDir="column"
        marginTop="15px"
        marginBottom="15px"
        mb="2"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box>
          {lastClass && (
            <Box
              bg="red.500"
              fontSize={14}
              w="600px"
              p={2}
              color="white"
              key={lastClass.id}
              left={0}
            >
              <Box p="2">
                <Text size="sm">Última aula</Text>
              </Box>
              <Spacer />
              <Flex>
                <Box p="2">
                  <Heading size="sm">{`${lastClass.id}`}</Heading>
                  <Link href={lastClass.url} isExternal>
                    <Heading size="sd">{`${lastClass.description}`}</Heading>
                  </Link>
                </Box>
                <Spacer />
                <Box p="2" textAlign="right">
                  <Heading size="sd">Senha</Heading>
                  <Heading size="xs" cursor="pointer" onClick={copyToClipboard}>{`${lastClass.secret}`}</Heading>
                  <Text className="copy__Alert" display="none" color="yellow.500">{copied}</Text>
                </Box>
              </Flex>
            </Box>
          )}
        </Box>
        <Box
          maxHeight="80vh"
          overflowY="scroll"      
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `rgba(255, 255, 255, 0.3)`,
            },
          }}     
        >
          <Stack
            flexDir="column"
            marginTop="15px"
            marginBottom="15px"
            mb="2"
            justifyContent="center"
            alignItems="center"
            width="100%"
            marginRight="1rem"
          >
            {list &&
              list.map((record) => {
                const { id, description, url, secret } = record;
                return (
                  <Box
                    bg="blue.500"
                    fontSize={14}
                    w="500px"
                    p={2}
                    color="white"
                    key={record.id}
                  >
                    <Flex>
                      <Box p="2">
                        <Heading size="sm">{`${id}`}</Heading>
                        <Link href={url} isExternal>
                          <Heading size="sd">{`${description}`}</Heading>
                        </Link>
                      </Box>
                      <Spacer />
                      <Box p="2" textAlign="right">
                        <Heading size="sd">Senha</Heading>
                        <Heading size="xs" cursor="pointer" onClick={copyToClipboard}>{`${secret}`}</Heading>
                        <Text className="copy__Alert" display="none" color="yellow.500">{copied}</Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

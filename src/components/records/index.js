import {
  Flex,
  Stack,
  Box,
  Heading,
  Spacer,
  Link,
  Text,
} from '@chakra-ui/react';

export default function Records({ list }) {
  const lastClass = list.length > 5 ? list[list.length - 1] : false;

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Stack
        flexDir="column"
        marginTop="15px"
        marginBottom="15px"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="blue.400">Gravações das aulas</Heading>

        {lastClass && (
          <Box
            bg="red.500"
            fontSize={14}
            w="500px"
            p={2}
            color="white"
            key={lastClass.id}
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
                <Heading size="xs">{`${lastClass.secret}`}</Heading>
              </Box>
            </Flex>
          </Box>
        )}

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
                    <Heading size="xs">{`${secret}`}</Heading>
                  </Box>
                </Flex>
              </Box>
            );
          })}
      </Stack>
    </Flex>
  );
}

import { Flex, Stack, Box, Heading, Spacer, Link } from '@chakra-ui/react';

export default function Records({ list }) {
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
        <Heading color="blue.400">Gravações</Heading>
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
                    <Heading size="sd">{`${id}`}</Heading>
                    <Heading size="md">{`${description}`}</Heading>
                  </Box>
                  <Spacer />
                  <Box p="2" textAlign="right">
                    <Heading size="sd" textDecoration="underline">
                      <Link href={url} isExternal>
                        link
                      </Link>
                    </Heading>
                    <Heading size="md">{`${secret}`}</Heading>
                  </Box>
                </Flex>
              </Box>
            );
          })}
      </Stack>
    </Flex>
  );
}

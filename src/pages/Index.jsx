import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Flex, Image, Link, Container } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulated search results
    const dummyResults = [
      {
        title: "Result 1",
        description: "This is the first search result",
        url: "https://example.com/result1",
      },
      {
        title: "Result 2",
        description: "This is the second search result",
        url: "https://example.com/result2",
      },
      {
        title: "Result 3",
        description: "This is the third search result",
        url: "https://example.com/result3",
      },
    ];

    setResults(dummyResults);
  };

  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Flex align="center" direction="column">
          <Image src="https://images.unsplash.com/photo-1592096304832-62463bfdc822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWFyY2glMjBlbmdpbmUlMjBsb2dvfGVufDB8fHx8MTcxMTQwMjI5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" w={200} mb={8} />
          <Heading as="h1" size="xl" mb={4}>
            Search Engine
          </Heading>
          <Flex maxW={600} w="100%">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter your search query" mr={4} />
            <Button colorScheme="blue" leftIcon={<FaSearch />} onClick={handleSearch}>
              Search
            </Button>
          </Flex>
        </Flex>

        {results.length > 0 && (
          <Box mt={8}>
            <Heading as="h2" size="lg" mb={4}>
              Search Results
            </Heading>
            {results.map((result, index) => (
              <Box key={index} mb={4}>
                <Link href={result.url} isExternal>
                  <Heading as="h3" size="md" mb={1}>
                    {result.title}
                  </Heading>
                </Link>
                <Text>{result.description}</Text>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Index;

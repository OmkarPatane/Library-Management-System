import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  createIcon,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight="110%"
          >
            Modern Library <br />
            <Text as="span" color="brand.500">
              Management System
            </Text>
          </Heading>
          <Text color="gray.500" maxW="3xl" mx="auto">
            Streamline your library operations with our comprehensive management
            system. Easily handle books, members, loans, and returns all in one
            place. Perfect for schools, universities, and public libraries.
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
          >
            <Button
              as={RouterLink}
              to="/users/signup"
              colorScheme="blue"
              bg="brand.500"
              rounded="full"
              px={6}
              _hover={{
                bg: "brand.400",
              }}
            >
              Get Started
            </Button>
            <Button
              as={RouterLink}
              to="/users/login"
              variant="link"
              colorScheme="blue"
              size="lg"
            >
              Learn more
            </Button>
          </Stack>
        </Stack>

        <Flex align="center" justify="center" mb={20}>
          <Box maxW="850px" boxShadow="2xl" rounded="md" overflow="hidden">
            <Image
              alt="Library Management System"
              src="/api/placeholder/850/480"
              objectFit="cover"
              w="full"
            />
          </Box>
        </Flex>

        <Stack
          py={16}
          px={{ base: 5, md: 20 }}
          spacing={10}
          align="center"
          bg={useColorModeValue("gray.50", "gray.800")}
          rounded="lg"
          mb={20}
        >
          <Heading as="h2" size="xl">
            Features
          </Heading>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={8}
            justifyContent="center"
            w="full"
          >
            {[
              {
                title: "Book Management",
                description:
                  "Add, edit, and track all books in your library with ease",
              },
              {
                title: "Member Management",
                description:
                  "Keep track of library members and their borrowing history",
              },
              {
                title: "Loan Tracking",
                description:
                  "Manage borrowing, returns, and late fees in one place",
              },
            ].map((feature, index) => (
              <Box
                key={index}
                p={6}
                bg="white"
                rounded="md"
                shadow="md"
                flex="1"
                textAlign="center"
              >
                <Heading as="h3" size="md" mb={4}>
                  {feature.title}
                </Heading>
                <Text>{feature.description}</Text>
              </Box>
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

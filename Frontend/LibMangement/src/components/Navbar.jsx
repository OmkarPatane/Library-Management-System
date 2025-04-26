import {
  Box,
  Flex,
  Button,
  Stack,
  Heading,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { isLoggedIn, logout, userRole, isProfileCreated } = useAuth();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
        justify="space-between"
        boxShadow="sm"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Heading
            as={RouterLink}
            to="/"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily="heading"
            color={useColorModeValue("brand.600", "white")}
            fontSize="xl"
          >
            LibraryManager
          </Heading>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
          display={{ base: "none", md: "flex" }}
        >
          {!isLoggedIn ? (
            <>
              <Button
                as={RouterLink}
                fontSize="sm"
                fontWeight={400}
                variant="link"
                to="/users/login"
              >
                Sign In
              </Button>
              <Button
                as={RouterLink}
                display={{ base: "none", md: "inline-flex" }}
                fontSize="sm"
                fontWeight={600}
                color="white"
                bg="brand.500"
                to="/users/signup"
                _hover={{
                  bg: "brand.400",
                }}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button
                as={RouterLink}
                fontSize="sm"
                fontWeight={400}
                variant="link"
                to={
                  userRole === "librarian"
                    ? "/dashboard/librarian"
                    : "/dashboard/user"
                }
              >
                Dashboard
              </Button>
              {!isProfileCreated ? (
                <Button
                  as={RouterLink}
                  fontSize="sm"
                  fontWeight={400}
                  variant="link"
                  to="/create-profile" // or your create profile route
                >
                  Create Profile
                </Button>
              ) : (
                <Button
                  as={RouterLink}
                  fontSize="sm"
                  fontWeight={400}
                  variant="link"
                  to="/profile" // your profile page
                >
                  Profile
                </Button>
              )}

              <Button
                fontSize="sm"
                fontWeight={600}
                color="white"
                bg="brand.500"
                onClick={logout}
                _hover={{
                  bg: "brand.400",
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          p={4}
          display={{ md: "none" }}
        >
          {!isLoggedIn ? (
            <>
              <Box py={2}>
                <Button
                  as={RouterLink}
                  w="full"
                  fontSize="sm"
                  fontWeight={400}
                  variant="ghost"
                  to="/users/login"
                >
                  Sign In
                </Button>
              </Box>
              <Box py={2}>
                <Button
                  as={RouterLink}
                  w="full"
                  fontSize="sm"
                  fontWeight={600}
                  color="white"
                  bg="brand.500"
                  to="/users/signup"
                  _hover={{
                    bg: "brand.400",
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box py={2}>
                <Button
                  as={RouterLink}
                  fontSize="sm"
                  fontWeight={400}
                  variant="link"
                  to={
                    userRole === "librarian"
                      ? "/dashboard/librarian"
                      : "/dashboard/user"
                  }
                >
                  Dashboard
                </Button>
              </Box>
              <Box py={2}>
                {!isProfileCreated ? (
                  <Button
                    as={RouterLink}
                    fontSize="sm"
                    fontWeight={400}
                    variant="link"
                    to="/create-profile" // or your create profile route
                  >
                    Create Profile
                  </Button>
                ) : (
                  <Button
                    as={RouterLink}
                    fontSize="sm"
                    fontWeight={400}
                    variant="link"
                    to="/profile" // your profile page
                  >
                    Profile
                  </Button>
                )}
              </Box>
              <Box py={2}>
                <Button
                  w="full"
                  fontSize="sm"
                  fontWeight={600}
                  color="white"
                  bg="brand.500"
                  onClick={logout}
                  _hover={{
                    bg: "brand.400",
                  }}
                >
                  Logout
                </Button>
              </Box>
            </>
          )}
        </Stack>
      </Collapse>
    </Box>
  );
}

export default Navbar;

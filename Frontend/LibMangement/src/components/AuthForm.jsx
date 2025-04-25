import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

function AuthForm({ isLogin, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const data = isLogin ? { email, password } : { email, password, role };
      await onSubmit(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      rounded="lg"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="lg"
      p={8}
      width={{ base: "full", md: "400px" }}
    >
      <Stack spacing={4}>
        <Heading fontSize="2xl" textAlign="center">
          {isLogin ? "Sign in to your account" : "Create your account"}
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            {!isLogin && (
              <FormControl id="role">
                <FormLabel>Role</FormLabel>
                <Select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="user">User</option>
                  <option value="librarian">Librarian</option>
                </Select>
              </FormControl>
            )}

            <Button
              type="submit"
              bg="brand.500"
              color="white"
              _hover={{
                bg: "brand.400",
              }}
              isLoading={isLoading}
            >
              {isLogin ? "Sign in" : "Sign up"}
            </Button>
          </Stack>
        </form>

        <Text align="center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <RouterLink to={isLogin ? "/users/signup" : "/users/login"}>
            <Text as="span" color="brand.500">
              {isLogin ? "Sign up" : "Sign in"}
            </Text>
          </RouterLink>
        </Text>
      </Stack>
    </Box>
  );
}

export default AuthForm;

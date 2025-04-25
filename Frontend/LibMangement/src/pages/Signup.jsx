import { Box, Flex, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";
import { registerUser } from "../services/api";

function Signup() {
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = async (data) => {
    try {
      await registerUser(data);

      toast({
        title: "Account created successfully",
        description: "You can now log in with your credentials",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate("/users/login");
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box minH="100vh">
      <Navbar />
      <Flex
        minH="calc(100vh - 60px)"
        align="center"
        justify="center"
        bg="gray.50"
      >
        <AuthForm isLogin={false} onSubmit={handleSignup} />
      </Flex>
    </Box>
  );
}

export default Signup;

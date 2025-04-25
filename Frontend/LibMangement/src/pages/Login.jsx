import { Box, Flex, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/api";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (data) => {
    try {
      const response = await loginUser(data);
      const userRole = login(response.Token);

      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Redirect based on role
      navigate(
        userRole === "librarian" ? "/dashboard/librarian" : "/dashboard/user"
      );
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
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
        <AuthForm isLogin={true} onSubmit={handleLogin} />
      </Flex>
    </Box>
  );
}

export default Login;

import { Navigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, isAllowed }) {
  const { loading } = useAuth();

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="brand.500" />
      </Center>
    );
  }

  if (!isAllowed) {
    return <Navigate to="/users/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

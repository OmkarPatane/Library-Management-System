import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import LibrarianDashboard from "./pages/LibrarianDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import UserProfile from "./components/UserProfile";

function App() {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <Router>
      <Box minH="100vh">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/create-profile" element={<UserProfile />} />
          <Route
            path="/dashboard/user"
            element={
              <ProtectedRoute isAllowed={isLoggedIn && userRole === "user"}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/librarian"
            element={
              <ProtectedRoute
                isAllowed={isLoggedIn && userRole === "librarian"}
              >
                <LibrarianDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

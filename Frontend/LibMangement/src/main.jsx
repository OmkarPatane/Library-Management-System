import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e6f1ff",
      100: "#bdd4ff",
      200: "#94b7fe",
      300: "#6a9afc",
      400: "#417dfb",
      500: "#2764e2",
      600: "#1d4eb0",
      700: "#14387f",
      800: "#0b234e",
      900: "#03101f",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

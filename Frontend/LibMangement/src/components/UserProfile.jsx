import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { createProfile } from "../services/api"; // adjust the path if needed
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

const UserProfile = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const { setIsProfileCreated } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProfile(formData);
      setIsProfileCreated(true); // ✅ mark profile as created
      toast({
        title: "Profile created successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard/user"); // or wherever you want to redirect
    } catch (error) {
      console.error("Profile creation error:", error);
      toast({
        title: "Error creating profile",
        description: error.response?.data?.message || "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box
        maxW="md"
        mx="auto"
        mt={10}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="md"
      >
        <Heading mb={6} textAlign="center" fontSize="2xl">
          Create Your Profile
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl mb={6} isRequired>
            <FormLabel>Phone</FormLabel>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </FormControl>

          <Button colorScheme="blue" width="full" type="submit">
            Create Profile
          </Button>
        </form>
      </Box>
    </>
  );
};

export default UserProfile;

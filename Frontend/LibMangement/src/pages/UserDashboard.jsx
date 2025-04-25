// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Grid,
//   GridItem,
//   Card,
//   CardHeader,
//   CardBody,
//   Stack,
//   StackDivider,
//   Button,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
//   Badge,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";
// import { useAuth } from "../context/AuthContext";

function UserDashboard() {
  //   const { userRole } = useAuth();
  //   const [searchQuery, setSearchQuery] = useState("");

  //   // Mock data for demonstration
  //   const borrowedBooks = [
  //     {
  //       id: 1,
  //       title: "The Great Gatsby",
  //       author: "F. Scott Fitzgerald",
  //       dueDate: "2025-05-10",
  //       status: "borrowed",
  //     },
  //     {
  //       id: 2,
  //       title: "1984",
  //       author: "George Orwell",
  //       dueDate: "2025-05-05",
  //       status: "overdue",
  //     },
  //     {
  //       id: 3,
  //       title: "To Kill a Mockingbird",
  //       author: "Harper Lee",
  //       dueDate: "2025-05-15",
  //       status: "borrowed",
  //     },
  //   ];

  //   const recommendations = [
  //     {
  //       id: 4,
  //       title: "The Catcher in the Rye",
  //       author: "J.D. Salinger",
  //       available: true,
  //     },
  //     {
  //       id: 5,
  //       title: "Pride and Prejudice",
  //       author: "Jane Austen",
  //       available: true,
  //     },
  //     { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", available: false },
  //   ];

  return (
    // <Box minH="100vh" bg="gray.50">
    //   <Navbar />
    //   <Box maxW="container.xl" mx="auto" py={8} px={4}>
    //     <Flex justifyContent="space-between" alignItems="center" mb={8}>
    //       <Box>
    //         <Heading size="lg">User Dashboard</Heading>
    //         <Text color="gray.600">Welcome back, User!</Text>
    //       </Box>
    //       <InputGroup maxW="300px">
    //         <InputLeftElement pointerEvents="none">
    //           <SearchIcon color="gray.300" />
    //         </InputLeftElement>
    //         <Input
    //           placeholder="Search for books..."
    //           bg="white"
    //           value={searchQuery}
    //           onChange={(e) => setSearchQuery(e.target.value)}
    //         />
    //       </InputGroup>
    //     </Flex>

    //     <Grid
    //       templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
    //       gap={6}
    //       mb={8}
    //     >
    //       <GridItem w="100%" colSpan={{ base: 1, md: 3 }}>
    //         <Card variant="outline" bg="white">
    //           <CardHeader>
    //             <Heading size="md">Your Borrowed Books</Heading>
    //           </CardHeader>
    //           <CardBody>
    //             <TableContainer>
    //               <Table variant="simple">
    //                 <Thead>
    //                   <Tr>
    //                     <Th>Title</Th>
    //                     <Th>Author</Th>
    //                     <Th>Due Date</Th>
    //                     <Th>Status</Th>
    //                     <Th>Action</Th>
    //                   </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                   {borrowedBooks.map((book) => (
    //                     <Tr key={book.id}>
    //                       <Td>{book.title}</Td>
    //                       <Td>{book.author}</Td>
    //                       <Td>{book.dueDate}</Td>
    //                       <Td>
    //                         <Badge
    //                           colorScheme={
    //                             book.status === "overdue" ? "red" : "green"
    //                           }
    //                         >
    //                           {book.status}
    //                         </Badge>
    //                       </Td>
    //                       <Td>
    //                         <Button size="sm" colorScheme="blue">
    //                           Return
    //                         </Button>
    //                       </Td>
    //                     </Tr>
    //                   ))}
    //                 </Tbody>
    //               </Table>
    //             </TableContainer>
    //           </CardBody>
    //         </Card>
    //       </GridItem>

    //       <GridItem w="100%" colSpan={{ base: 1, md: 3 }}>
    //         <Card variant="outline" bg="white">
    //           <CardHeader>
    //             <Heading size="md">Recommended for You</Heading>
    //           </CardHeader>
    //           <CardBody>
    //             <Stack divider={<StackDivider />} spacing={4}>
    //               {recommendations.map((book) => (
    //                 <Flex
    //                   key={book.id}
    //                   justifyContent="space-between"
    //                   alignItems="center"
    //                 >
    //                   <Box>
    //                     <Heading size="sm">{book.title}</Heading>
    //                     <Text pt={2} fontSize="sm">
    //                       by {book.author}
    //                     </Text>
    //                   </Box>
    //                   <Button
    //                     size="sm"
    //                     colorScheme="blue"
    //                     isDisabled={!book.available}
    //                   >
    //                     {book.available ? "Borrow" : "Unavailable"}
    //                   </Button>
    //                 </Flex>
    //               ))}
    //             </Stack>
    //           </CardBody>
    //         </Card>
    //       </GridItem>
    //     </Grid>
    //   </Box>
    // </Box>
    <>
      <Navbar />
      <h1>User Dashabord</h1>
    </>
  );
}

export default UserDashboard;

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
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatGroup,
//   Icon,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { SearchIcon, AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";

function LibrarianDashboard() {
  //   const [searchQuery, setSearchQuery] = useState("");

  //   // Mock data
  //   const recentActivities = [
  //     {
  //       id: 1,
  //       user: "John Doe",
  //       book: "The Great Gatsby",
  //       action: "borrowed",
  //       date: "2025-04-24",
  //     },
  //     {
  //       id: 2,
  //       user: "Jane Smith",
  //       book: "1984",
  //       action: "returned",
  //       date: "2025-04-23",
  //     },
  //     {
  //       id: 3,
  //       user: "Alex Johnson",
  //       book: "To Kill a Mockingbird",
  //       action: "borrowed",
  //       date: "2025-04-22",
  //     },
  //   ];

  return (
    // <Box minH="100vh" bg="gray.50">
    //   <Navbar />
    //   <Box maxW="container.xl" mx="auto" py={8} px={4}>
    //     <Flex justifyContent="space-between" alignItems="center" mb={8}>
    //       <Box>
    //         <Heading size="lg">Librarian Dashboard</Heading>
    //         <Text color="gray.600">Hello, Librarian!</Text>
    //       </Box>
    //       <Flex gap={4}>
    //         <InputGroup maxW="300px">
    //           <InputLeftElement pointerEvents="none">
    //             <SearchIcon color="gray.300" />
    //           </InputLeftElement>
    //           <Input
    //             placeholder="Search..."
    //             bg="white"
    //             value={searchQuery}
    //             onChange={(e) => setSearchQuery(e.target.value)}
    //           />
    //         </InputGroup>
    //         <Menu>
    //           <MenuButton
    //             as={Button}
    //             rightIcon={<ChevronDownIcon />}
    //             colorScheme="blue"
    //           >
    //             Actions
    //           </MenuButton>
    //           <MenuList>
    //             <MenuItem icon={<AddIcon />}>Add New Book</MenuItem>
    //             <MenuItem>Manage Members</MenuItem>
    //             <MenuItem>Generate Reports</MenuItem>
    //           </MenuList>
    //         </Menu>
    //       </Flex>
    //     </Flex>

    //     <StatGroup mb={8} bg="white" p={5} borderRadius="lg" shadow="sm">
    //       <Stat>
    //         <StatLabel>Total Books</StatLabel>
    //         <StatNumber>1,258</StatNumber>
    //       </Stat>
    //       <Stat>
    //         <StatLabel>Books Borrowed</StatLabel>
    //         <StatNumber>48</StatNumber>
    //       </Stat>
    //       <Stat>
    //         <StatLabel>Books Borrowed</StatLabel>
    //         <StatNumber>48</StatNumber>
    //       </Stat>
    //       <Stat>
    //         <StatLabel>Active Members</StatLabel>
    //         <StatNumber>325</StatNumber>
    //       </Stat>
    //       <Stat>
    //         <StatLabel>Overdue Books</StatLabel>
    //         <StatNumber>12</StatNumber>
    //       </Stat>
    //     </StatGroup>

    //     <Grid
    //       templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
    //       gap={6}
    //       mb={8}
    //     >
    //       <GridItem w="100%" colSpan={{ base: 1, md: 3 }}>
    //         <Card variant="outline" bg="white">
    //           <CardHeader>
    //             <Flex justify="space-between" align="center">
    //               <Heading size="md">Recent Activities</Heading>
    //               <Button size="sm" colorScheme="blue" variant="outline">
    //                 View All
    //               </Button>
    //             </Flex>
    //           </CardHeader>
    //           <CardBody>
    //             <TableContainer>
    //               <Table variant="simple">
    //                 <Thead>
    //                   <Tr>
    //                     <Th>User</Th>
    //                     <Th>Book</Th>
    //                     <Th>Action</Th>
    //                     <Th>Date</Th>
    //                   </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                   {recentActivities.map((activity) => (
    //                     <Tr key={activity.id}>
    //                       <Td>{activity.user}</Td>
    //                       <Td>{activity.book}</Td>
    //                       <Td>
    //                         <Badge
    //                           colorScheme={
    //                             activity.action === "borrowed"
    //                               ? "blue"
    //                               : "green"
    //                           }
    //                         >
    //                           {activity.action}
    //                         </Badge>
    //                       </Td>
    //                       <Td>{activity.date}</Td>
    //                     </Tr>
    //                   ))}
    //                 </Tbody>
    //               </Table>
    //             </TableContainer>
    //           </CardBody>
    //         </Card>
    //       </GridItem>

    //       <GridItem w="100%" colSpan={{ base: 1, md: 2 }}>
    //         <Card variant="outline" bg="white" h="100%">
    //           <CardHeader>
    //             <Heading size="md">Books Management</Heading>
    //           </CardHeader>
    //           <CardBody>
    //             <TableContainer>
    //               <Table variant="simple" size="sm">
    //                 <Thead>
    //                   <Tr>
    //                     <Th>Title</Th>
    //                     <Th>Author</Th>
    //                     <Th>Status</Th>
    //                     <Th>Actions</Th>
    //                   </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                   {[
    //                     {
    //                       id: 1,
    //                       title: "The Great Gatsby",
    //                       author: "F. Scott Fitzgerald",
    //                       status: "available",
    //                     },
    //                     {
    //                       id: 2,
    //                       title: "1984",
    //                       author: "George Orwell",
    //                       status: "borrowed",
    //                     },
    //                     {
    //                       id: 3,
    //                       title: "Pride and Prejudice",
    //                       author: "Jane Austen",
    //                       status: "available",
    //                     },
    //                     {
    //                       id: 4,
    //                       title: "To Kill a Mockingbird",
    //                       author: "Harper Lee",
    //                       status: "borrowed",
    //                     },
    //                   ].map((book) => (
    //                     <Tr key={book.id}>
    //                       <Td>{book.title}</Td>
    //                       <Td>{book.author}</Td>
    //                       <Td>
    //                         <Badge
    //                           colorScheme={
    //                             book.status === "available" ? "green" : "orange"
    //                           }
    //                         >
    //                           {book.status}
    //                         </Badge>
    //                       </Td>
    //                       <Td>
    //                         <Button size="xs" colorScheme="blue" mr={2}>
    //                           Edit
    //                         </Button>
    //                         <Button size="xs" colorScheme="red">
    //                           Delete
    //                         </Button>
    //                       </Td>
    //                     </Tr>
    //                   ))}
    //                 </Tbody>
    //               </Table>
    //             </TableContainer>
    //             <Button
    //               leftIcon={<AddIcon />}
    //               colorScheme="blue"
    //               size="sm"
    //               mt={4}
    //             >
    //               Add New Book
    //             </Button>
    //           </CardBody>
    //         </Card>
    //       </GridItem>

    //       <GridItem w="100%" colSpan={{ base: 1, md: 1 }}>
    //         <Card variant="outline" bg="white" h="100%">
    //           <CardHeader>
    //             <Heading size="md">Quick Actions</Heading>
    //           </CardHeader>
    //           <CardBody>
    //             <Flex direction="column" gap={4}>
    //               <Button colorScheme="blue" leftIcon={<AddIcon />}>
    //                 Add New Book
    //               </Button>
    //               <Button colorScheme="teal">Process Returns</Button>
    //               <Button colorScheme="purple">Manage Members</Button>
    //               <Button colorScheme="orange">Generate Reports</Button>
    //               <Button colorScheme="green">Issue Book</Button>
    //             </Flex>
    //           </CardBody>
    //         </Card>
    //       </GridItem>
    //     </Grid>
    //   </Box>
    // </Box>
    <>
      <Navbar />
      <h1>Librian Dashboard</h1>
    </>
  );
}

export default LibrarianDashboard;

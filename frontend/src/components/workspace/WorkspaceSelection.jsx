import React from "react";
import { Box, Button, Flex, Text, VStack, Container, Heading } from "@chakra-ui/react";
import { useWorkspace } from "../../Context/WorkspaceProvider";
import { useNavigate } from "react-router-dom";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
import JoinWorkspaceModal from "./JoinWorkspaceModal";

const WorkspaceSelection = () => {
  const { userWorkspaces, setUserWorkspaces } = useWorkspace();
  console.log("workspaces", userWorkspaces);
  const navigate = useNavigate();

  const handleSelectWorkspace = (workspace) => {
    setUserWorkspaces(workspace);
    let workspaceId = workspace._id;
    console.log("worksapce_id", workspace._id);
    navigate(`/workspace/${workspaceId}/chats`);
  };

  return (
    <Flex
      minHeight="100vh"
      width="100%"
      align="center"
      justify="center"
      bg="#0f1924"
      py={8}
    >
      <Container maxW="1400px" px={6}>
        <Flex
          bg="#1b3046ff"
          borderRadius="2xl"
          boxShadow="0 8px 32px rgba(0, 0, 0, 0.4)"
          border="1px solid"
          borderColor="#2982db20"
          overflow="hidden"
          direction="column"
        >
          {/* Hero Section */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            p={{ base: 8, md: 12 }}
            gap={8}
          >
            {/* Content */}
            <VStack
              align={{ base: "center", lg: "flex-start" }}
              spacing={6}
              flex={1}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Box>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  fontWeight="800"
                  color="white"
                  lineHeight="1.2"
                  mb={4}
                >
                  Introducing ComConnect
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.300"
                  lineHeight="1.8"
                  maxW="600px"
                >
                  Revolutionizing college communities by connecting students,
                  allocating roles based on preferences, and creating teams that
                  feel like family. Empower collaboration and enhance productivity
                  with ComConnect!
                </Text>
              </Box>
            </VStack>

            {/* Image */}
            <Flex
              flex={1}
              justify="center"
              align="center"
              maxW={{ base: "300px", md: "400px", lg: "500px" }}
            >
              <Box
                position="relative"
                w="100%"
                h="100%"
              >
                <Box
                  as="img"
                  src="/images/workspace.png"
                  alt="workspace"
                  w="100%"
                  h="auto"
                />
              </Box>
            </Flex>
          </Flex>

          {/* Action Buttons Section */}
          <Box
            bg="#0F1924"
            borderTop="1px solid"
            borderColor="#2982db20"
            px={{ base: 8, md: 12 }}
            py={8}
          >
            <VStack spacing={6}>
              <Text
                fontSize="lg"
                fontWeight="600"
                color="white"
                textAlign="center"
              >
                Create or join a workspace to begin collaborating
              </Text>

              <Flex
                direction={{ base: "column", md: "row" }}
                gap={4}
                w="full"
                justify="center"
                flexWrap="wrap"
              >
                {/* Create Workspace Card */}
                <VStack
                  flex={{ base: "1", md: "0 1 300px" }}
                  bg="#1b3046ff"
                  border="1px solid"
                  borderColor="#2982db20"
                  borderRadius="xl"
                  p={6}
                  spacing={4}
                >
                  <VStack spacing={2}>
                    <Text fontSize="xl" fontWeight="700" color="white">
                      Create Workspace
                    </Text>
                    <Text fontSize="sm" color="gray.400" textAlign="center">
                      Start fresh with a new workspace
                    </Text>
                  </VStack>
                  <CreateWorkspaceModal />
                </VStack>

                {/* Join Workspace Card */}
                <VStack
                  flex={{ base: "1", md: "0 1 300px" }}
                  bg="#1b3046ff"
                  border="1px solid"
                  borderColor="#2982db20"
                  borderRadius="xl"
                  p={6}
                  spacing={4}
                >
                  <VStack spacing={2}>
                    <Text fontSize="xl" fontWeight="700" color="white">
                      Join Workspace
                    </Text>
                    <Text fontSize="sm" color="gray.400" textAlign="center">
                      Connect with an existing team
                    </Text>
                  </VStack>
                  <JoinWorkspaceModal>
                    <Button
                      bg="#21364A"
                      color="white"
                      px={4}
                      py={2}
                      rounded="lg"
                      fontWeight="600"
                      w="full"
                      _hover={{ bg: "#192937ff" }}
                    >
                      Join Workspace
                    </Button>
                  </JoinWorkspaceModal>
                </VStack>

                {/* View Workspaces Card */}
                <VStack
                  flex={{ base: "1", md: "0 1 300px" }}
                  bg="#1b3046ff"
                  border="1px solid"
                  borderColor="#2982db20"
                  borderRadius="xl"
                  p={6}
                  spacing={4}
                >
                  <VStack spacing={2}>
                    <Text fontSize="xl" fontWeight="700" color="white">
                      My Workspaces
                    </Text>
                    <Text fontSize="sm" color="gray.400" textAlign="center">
                      View all {userWorkspaces?.length || 0} workspace{userWorkspaces?.length !== 1 ? 's' : ''}
                    </Text>
                  </VStack>
                  <Button
                    bg="#21364A"
                    color="white"
                    px={4}
                    py={2}
                    rounded="lg"
                    fontWeight="600"
                    _hover={{ bg: "#192937ff" }}
                    onClick={() => navigate("/my-workspaces")}
                  >
                    View My Workspaces
                  </Button>
                </VStack>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default WorkspaceSelection;

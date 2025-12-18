import React from "react";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { useWorkspace } from "../../Context/WorkspaceProvider";
import { useNavigate } from "react-router-dom";
import CreateWorkspaceModal from "./CreateWorkspaceModal"; // Add this import

import "./workspace.css";
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
    >

      <div>
        <Box
          width={"90vw"}>

          <Flex
            bg="#1b3046ff"
            p={8}
            borderRadius="lg"
            boxShadow="lg"
            position={"relative"}
            top="0"
            left="0"
            right="0"
            margin="0 auto"
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <div className="flex items-center justify-center ">
              <div className="workspace_content_heading text-white ">
                Introducing ComConnect:
                <p className="workspace_content_description w-[700px] ">Revolutionizing college communities by
                  connecting students, allocating roles based on preferences, and
                  creating teams that feel like family. Empower collaboration and
                  enhance productivity with comConnect! <br /> To create or join a workspace use the buttons below</p>
              </div>
              <div className="workspace_img_container">
                <img className="workspace_img" src="/images/workspace.png" alt="workspace" />
              </div>
            </div>
            <Box
              width={["90%", "90%", "90%", "70%"]}
              p={8}
              display="flex"
              alignItems="center"
              justifyItems="center"
              justifyContent="space-around"
            >
              <CreateWorkspaceModal>Create Workspace</CreateWorkspaceModal>
              <JoinWorkspaceModal>
                <div className="bg-[#05549e] text-white px-3 py-2 cursor-pointer hover:bg-white hover:text-[#05549e] transition-colors font-[600] z-1 rounded-lg ">
                  Join Workspace
                </div>
              </JoinWorkspaceModal>
              <div className="h-fit">
                {Array.isArray(userWorkspaces) && userWorkspaces.length > 0 ? (
                  userWorkspaces.map((workspace) => (
                    <Button
                      className="cnt"
                      key={workspace._id}
                      onClick={() => handleSelectWorkspace(workspace)}
                    >
                      {workspace.workspaceName}
                    </Button>
                  ))
                ) : (
                  <Box>
                    <div className="simple">"No workspaces available"</div>
                  </Box>
                )}
              </div>
            </Box>
          </Flex>


        </Box>
      </div>




    </Flex>

  );
};

export default WorkspaceSelection;

import { Box, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup"; // Import Signup component
import "./home.css";
import BackgroundComponent from "../components/Elements/background";
import TextBox from "../components/Elements/text_box";
import { Flex } from "@chakra-ui/react";

function Homepage() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false); // State to track if it's signup

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/workspace");
  }, [navigate]);

  return (
    <Flex
      minHeight="100vh"
      width="100%"
      align="center"
      justify="center"
      bg="#0f1924"
    >
      <Box
        bg="#1b3046ff"
        width={["90%", "90%", "90%", "70%"]}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Box width="100%" className="container">
          <Box
            className="left-box"
            flex="1"
            display="flex"
            flexDirection="column"
            bottom="0px"
          >
            <Box position="relative" mb="0px">
              {!isSignup ? (
                <>
                  <Text
                    fontFamily="Inter"
                    fontWeight="700"
                    // lineHeight={{ base: "40px", md: "55px", lg: "66.65px" }}
                    fontSize={{ base: "24px", md: "34px" }}
                    textAlign="left"
                    color="#FAFAFC"
                    mb={{ base: "4px", md: "6px", lg: "8px" }}
                    mt={"0px"}
                  >
                    Hey, Welcome Back!
                  </Text>
                  <Box position="relative" mt="0px">
                    <TextBox children="We are very happy to see you again!" />
                  </Box>
                </>
              ) : (
                <>
                  <Text
                    fontFamily="Inter"
                    fontWeight="700"
                    // lineHeight={{ base: "40px", md: "55px", lg: "66.65px" }}
                    fontSize={{ base: "24px", md: "34px" }}
                    textAlign="left"
                    color="#FAFAFC"
                    mb={{ base: "4px", md: "6px", lg: "8px" }}
                    mt={"0px"}
                  >
                    Welcome to ComConnect!
                  </Text>
                  <Box position="relative" mt="0px">
                    <TextBox children="Connect. Communicate. Collaborate." />
                  </Box>
                </>
              )}
            </Box>

            <Tabs isFitted variant="soft-rounded">
              <TabPanels>
                <TabPanel>{isSignup ? <Signup /> : <Login />}</TabPanel>
              </TabPanels>
            </Tabs>

            <Box display="flex" justifyContent="center">
              <TextBox>
                {isSignup
                  ? "Already have an account? "
                  : "Don’t have an account? "}
                <Box
                  as="button"
                  color="blue.500"
                  onClick={() => setIsSignup(!isSignup)} // Toggle the state
                >
                  {isSignup ? "Login" : "Sign Up"}{" "}
                  {/* Text changes based on the state */}
                </Box>
              </TextBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Homepage;

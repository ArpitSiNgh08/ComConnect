import React from 'react';
import { Button, Image, Text } from "@chakra-ui/react";


const GoogleLoginButton = () => {
  return (
    <Button
      colorScheme="gray"
      borderColor="blue.500"
      variant="outline"
      width="full"
      mt={0}
      display="flex"
      alignItems="center"
      _hover={{ bg: "#025fb6ff" }}
    >
      <Image
        src="./images/google.png"
        alt="Google logo"
        boxSize="20px"
        mr={3}
      />
      <Text fontSize="sm" color="white">
        Login with Google
      </Text>
    </Button>
  );
};

export default GoogleLoginButton;
// FileUpload.js

import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select a file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/core/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("File uploaded successfully.");
    } catch (error) {
      setError("Error uploading file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
  
      <Box
        backgroundColor="rgba(255, 255, 255, 0.8)"
        padding={8}
        borderRadius="md"
        boxShadow="lg"
        textAlign="center"
      >
        <Input type="file" onChange={handleFileChange} mb={4} />
        {error && <Text color="red.500">{error}</Text>}
        {successMessage && <Text color="green.500">{successMessage}</Text>}
        <Button
          onClick={handleSubmit}
          colorScheme="teal"
          isLoading={loading}
          mt={4}
        >
          Upload File
        </Button>
      </Box>

  );
};

export default FileUpload;

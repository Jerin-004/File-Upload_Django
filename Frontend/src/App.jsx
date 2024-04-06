import FileUpload from "./components/FileUpload";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <FileUpload />
      </ChakraProvider>
    </>
  );
}

export default App;

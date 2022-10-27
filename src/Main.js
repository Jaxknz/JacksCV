
import {Box, Flex,  Image, ChakraProvider} from '@chakra-ui/react';
import Logo from './assets/background/Logo.png';
import './App.css';

const Main = () =>{
    return(
        <div className="main" id="main">
        <ChakraProvider>
        <div className="MainMint" id="MainMint">
        <Flex justify="center" align="center"   paddingBottom="130px">
            <Box width="60%">
                <div>
                    <Image align="center"   alt="Jack's Picture"src={Logo}/>
                </div>
            </Box>
        </Flex>
        </div>
        </ChakraProvider>
        </div>
        
    );
    
};

export default Main;

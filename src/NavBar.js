import React from 'react';
import {Flex,ChakraProvider,} from '@chakra-ui/react';
import {Link} from 'react-scroll';


const NavBar =() =>{
 
    return(
        <div className='nav' id="nav">
        <ChakraProvider>
        <Flex justify="center" width="100%"align="center"   justifyContent="center"  paddingTop="1rem">
            {/*Left side*/}
            <Flex  className="navbox" justify= "center" align="center"   >
            <div className='pageLinks'>
            <ul>
            <Link  className='link' to="About" spy={true} smooth={true} offset={30} duration={500}margin="0 5px">About</Link>
            <Link className='link' to="Education" spy={true} smooth={true} offset={50} duration={500}margin="0 5px">Education</Link>
            <Link className='link' to="Work" spy={true} smooth={true} offset={50} duration={500}margin="0 5px">Work Experience</Link>
            </ul>
            </div>
           </Flex>
        </Flex>
        </ChakraProvider>
        </div>
    );
};

export default NavBar;
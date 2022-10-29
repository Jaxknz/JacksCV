import {React, useState} from 'react';
import {Flex,ChakraProvider} from '@chakra-ui/react';
import {Link} from 'react-scroll';
import './App.css';

const NavBar =() =>{
    const [isActive, setActive] = useState(false);
    const toggleClass = () =>{
        setActive(!isActive);
    }
    return(
        <div className='nav' id="nav">
        <ChakraProvider>
        <Flex justify="center" width="100%"align="center"   justifyContent="center"  paddingTop="1rem">
            {/*Left side*/}
            <Flex  className="navbox" justify= "center" align="center"   >
            <div className='pageLinks'>
            <ul>
            <li><Link  className='link' to="About" spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">About</Link></li>
            <li><Link className='link' to="Education" spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">Education</Link></li>
            <li><Link className='link' to="Work" spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">Work Experience</Link></li>
            <li><Link className='link' to="skills" spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">Skills</Link></li>
            </ul>
            </div>
            <button className={`hamburger ${isActive ? 'is-active' : null}`} onClick={toggleClass}>
                <div className="bar"></div>
            </button>
           </Flex>
           <Flex className={`mobileNav ${isActive ? 'is-active' : null}`}>
            <ul>
           <li><Link  className='link' to="About" onClick={toggleClass} spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">About</Link></li>
            <li><Link className='link' to="Education" onClick={toggleClass} spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">Education</Link></li>
            <li><Link className='link' to="Work" onClick={toggleClass} spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">Work Experience</Link></li>
            <li><Link className='link' to="skills" onClick={toggleClass} spy={true} smooth={true} offset={-10} duration={500}margin="0 5px">Skills</Link></li>
            </ul>
           </Flex>
        </Flex>
        </ChakraProvider>
        </div>
    );
};

export default NavBar;
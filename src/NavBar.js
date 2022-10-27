import React from 'react';
import {Flex,ChakraProvider,} from '@chakra-ui/react';
import {Link} from 'react-scroll';


const NavBar =({accounts, setAccounts}) =>{
 
    return(
        <div className='nav' id="nav">
        <ChakraProvider>
        <Flex justify="center" width="100%"align="center"   justifyContent="center"  paddingTop="1rem">
            {/*Left side*/}
            <Flex  className="navbox" justify= "center" align="center"   >
                
                <a width="20%"href="https://discord.gg/highrollersNFT" target="_blank" rel="noreferrer">
                    <img alt="discord"className='discordLink'/>
                </a>
                <a width="20%"href="https://twitter.com/HighRollersOFL" target="_blank" rel="noreferrer">
                    <img alt="twitter" className="twitterLink" />
                </a>
                <a width="20%"href="." >
                    <img alt="opensea"className="openseaLink"/>
                </a>


            <div className='pageLinks'>
            <ul>
            <Link  className='link' to="About" spy={true} smooth={true} offset={50} duration={500}margin="0 5px">About</Link>
            <Link className='link' to="Team" spy={true} smooth={true} offset={-20} duration={500}margin="0 5px">Team</Link>
            <Link className='link' to="Roadmap" spy={true} smooth={true} offset={90} duration={500}margin="0 5px">Roadmap</Link>
            <Link className='link' to="FAQ" spy={true} smooth={true} offset={50} duration={500}margin="0 5px">FAQ</Link>
            </ul>
            </div>
           </Flex>
        </Flex>
        </ChakraProvider>
        </div>
    );
};

export default NavBar;
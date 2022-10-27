import {Box, Flex, Text, Image} from '@chakra-ui/react';
import Jaxk from './assets/team/jaxk.png';
import './App.css';

const Team = () => {
    return(
      <div className='Team' id="team">
        <Flex justify="center" align="center"  >
            <Box className="box"width='90%' height="100%" bg="black" opacity="0.85" borderRadius="100px"  >
                <Text fontSize="48px" color="#ffffff" paddingBottom="20px">Team</Text>
              
               {/*Team member photos*/}
            <Flex justify="center"  align="center" borderRadius='10px'>
                <ul>
                <div class="container">
                  <li className='team'><Image className='teamImg' src={Jaxk} ></Image></li>
                  <div class="info">
                    <Text fontSize="20px" color="#00aeff">Jaxk</Text>
                    <span>Founder/Devloper</span>
                  </div>
                  <div class="social">
                  <a width="20%"href="https://twitter.com" target="_blank" rel="noreferrer">
                    <Image className="twitterLink" /></a>
                    <a width="20%"href="https://instagram.com" target="_blank" rel="noreferrer">
                    <Image className="instaLink" /></a>
                  </div>
                  </div>

                  <div class="container">
                  <li className='team'><Image className='teamImg' src={Jaxk} ></Image></li>
                  <div class="info">
                  <Text fontSize="20px" color="#00aeff">RojoMojo</Text>
                    <span>Founder</span>
                  </div>
                  <div class="social">
                  <a width="20%"href="https://twitter.com" target="_blank" rel="noreferrer">
                    <Image className="twitterLink" /></a>
                    <a width="20%"href="https://instagram.com" target="_blank" rel="noreferrer">
                    <Image className="instaLink" /></a>
                  </div>
                  </div>

                  <div class="container">
                  <li className='team'><Image className='teamImg' src={Jaxk} ></Image></li>
                  <div class="info">
                  <Text fontSize="20px" color="#00aeff">Jaxk</Text>
                    <span>Artist</span>
                  </div>
                  <div class="social">
                  <a width="20%"href="https://twitter.com" target="_blank" rel="noreferrer">
                    <Image className="twitterLink" /></a>
                    <a width="20%"href="https://instagram.com" target="_blank" rel="noreferrer">
                    <Image className="instaLink" /></a>
                  </div>
                  </div>
                 
                  <div class="container">
                  <li className='team'><Image className='teamImg' src={Jaxk} ></Image></li>
                  <div class="info">
                  <Text fontSize="20px" color="#00aeff">Jaxk</Text>
                    <span>Community Lead</span>
                  </div>
                  <div class="social">
                  <a width="20%"href="https://twitter.com" target="_blank" rel="noreferrer">
                    <Image className="twitterLink" /></a>
                    <a width="20%"href="https://instagram.com" target="_blank" rel="noreferrer">
                    <Image className="instaLink" /></a>
                  </div>
                  </div>
                  </ul>
            </Flex>
            
            </Box>
        </Flex>
        </div>
    )

}
export default Team;
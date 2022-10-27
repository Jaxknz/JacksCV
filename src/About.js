import {Box, Flex, Text, Image,UnorderedList,ListItem} from '@chakra-ui/react';
import Jaxk from './assets/team/jaxk.png';
import './App.css';

const About = () => {
    return(
        <div className='About' id="About">
        <Flex justify="center" paddingTop="100px" paddingBottom="150px" >
            <Box className="box"bg="black" opacity="0.85" width='90%' height="100%" borderRadius="100px" >
                <Text fontSize="48px" color="#ffffff">About</Text>
                <Flex  paddingLeft="10px" paddingRight="10px" width="100%" >                           
                 <Image className="image" alt="Jaxk"src={Jaxk}/>
                 <Text fontSize="20px" fontFamily="Inconsolata" color="#ffffff">High Rollers is a collection of 10000 unique NFT's with the goal of giving back to the community.
                 Founded by 2 lads from New Zealand with a dream and a vision to revolutionize the "Utilty" within the NFT space.
                 <Text fontSize="30px" color="#00aeff" align="left" paddingLeft="50px">Holding rewards</Text>
                 
                 <UnorderedList align="left">
                 <ListItem>$Roller Token rewards</ListItem>
                <ListItem>DAO Voting power</ListItem>
                <ListItem>Weekly ETH airdrops</ListItem>
                <ListItem>IRL Music festivals</ListItem>
                <ListItem>Metaverse access</ListItem>
                <ListItem>Tier staking of the High Rollers NFT</ListItem>
                <ListItem>Sherbert lollipop- pink pills for Mutant Rollers</ListItem>
                </UnorderedList></Text>


                 </Flex>    
                
            </Box>
        </Flex>
        </div>
    )

}
export default About;
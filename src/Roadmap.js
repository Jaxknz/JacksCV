import {Box, Flex, Text} from '@chakra-ui/react';

const Roadmap = () => {
    return(
        <div className='roadmap' id="Roadmap">
        <Flex justify="center" align="center" paddingTop="100px" paddingBottom="150px" >
            <Box className="box" width='90%' height="100%" bg="black" opacity="0.85"  borderRadius="100px" >
            <Text fontSize="48px" color="#ffffff">Roadmap</Text>
                <Flex justify="center" paddingLeft="10px" paddingRight="10px" display="flow" >
                <Text  fontSize="30px"  color="#00aeff">Phase I: Launching the collection
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>Launch Discord and website</li>
                <li>Reward the growing community with whitelist spots and giveaways</li>
                <li>Launch 5000 unique NFT's onto the ETH blockchain</li>
                </Text>
                </Text>
                <Text  fontSize="30px"  color="#00aeff">Phase II: Community building           
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>Enabled the DAO for holders to have a say in the choices the project makes</li>
                <li>Reward the CURRENT holders with gig tickets, ETH, and NFT airdrops</li>
                <li>Merch store opens for holders</li>
                </Text></Text>
                <Text  fontSize="30px"  color="#00aeff">Phase III: Public service
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>Host IRL music festivals with holders getting special perks</li>
                <li>Activate the community wallet</li>
                <li>Open the Rollers lounge</li>
                </Text></Text>
                <Text fontSize="30px"  color="#00aeff">Phase IV: Metaverse access
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>Open up the metaverse on the DAO selected land</li>
                <li>Reward holders with $ROLLER Token</li>
                <li>Metaverse ready Roller airdropped to holders</li>
                </Text></Text>
                </Flex>
            </Box>
        </Flex>
        </div>
    )

}
export default Roadmap;
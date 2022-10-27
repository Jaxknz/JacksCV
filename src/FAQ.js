import {Box, Flex, Text} from '@chakra-ui/react';

const Roadmap = () => {
    return(
        <div className='FAQ' id="FAQ">
        <Flex justify="center" align="center" paddingTop="100px" paddingBottom="150px" >
            <Box className="box" width='90%' height="100%" bg="black" opacity="0.85"  borderRadius="100px" >
            <Text fontSize="48px" color="#ffffff">FAQ</Text>
                <Flex justify="center" paddingLeft="10px" paddingRight="10px" display="flow" >
                <Text  fontSize="30px"  color="#00aeff">How many Rollers are available?
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>There are 5000 Rollers in the initial release.</li>
                </Text>
                </Text>
                <Text  fontSize="30px"  color="#00aeff">Can I sell my High Rollers NFT?         
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>Yes, you are able to sell your NFT on any trading platform you want to.</li>
                </Text></Text>
                <Text  fontSize="30px"  color="#00aeff">Wen mint?
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>Mint date is currently TBA</li>
                </Text></Text>
                <Text fontSize="30px"  color="#00aeff">What is the mint price?
                <Text fontSize="20px" textColor="#ffffff" fontFamily="Inconsolata">
                <li>Mint is FREE, just pay the gas fee.</li>
                </Text></Text>
                </Flex>
            </Box>
        </Flex>
        </div>
    )

}
export default Roadmap;
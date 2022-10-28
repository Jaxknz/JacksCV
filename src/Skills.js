import {Box, Flex, Text} from '@chakra-ui/react';

const Skills =() =>{
    return(
        <div className="Skills" id="skills">
        <Flex className="section">
        <Box className="box">
        <Text className="title">Skills</Text>
        <Flex className='sectionContent'>
        <Text>Technical Skills</Text>
        </Flex>
        </Box>
        </Flex>

        </div>

    );
}

export default Skills;
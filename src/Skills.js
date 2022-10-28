import {Box, Flex, Text} from '@chakra-ui/react';

const Skills =() =>{
    return(
        <div className="Skills" id="skills">
        <Flex className="section">
        <Box className="box">
        <Text className="title">Skills</Text>
        <Flex className='sectionContent'>
        <Box className='skillsContent'>
        <Text className='jobTitle'>Technical Skills</Text>
        </Box>
        <Box className='skillsContent'>
        <Text className='jobTitle'>General Skills</Text>
        </Box>
        </Flex>
        </Box>
        </Flex>

        </div>

    );
}

export default Skills;
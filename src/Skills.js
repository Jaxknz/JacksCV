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
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>Javascript</li>
        <li>Java</li>
        <li>SQL</li>
        <li>C#</li>
        <li>C++</li>
        <li>Photoshop</li>
        <li>Microsoft 365 (Excel, word, teams, etc..)</li>
        </ul>
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
import {Box, Flex, Text} from '@chakra-ui/react';

const Skills =() =>{
    return(
        <div className="Skills" id="skills">
        <Flex className="section">
        <Box className="box">
        <Text className="title">Skills</Text>
        <Flex className='sectionContent'>
        <ul className='skillsList'>
        <Box className='skillsContent'>
        <Text className='jobTitle'>Technical Skills</Text>
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
        </Box>
        <Box className='skillsContent'>
        <Text className='jobTitle'>General Skills</Text>
        <li>Time management</li>
        <li>Customer service / Commiunication</li>
        <li>Problem solving</li>
        <li>Ability to work in a team or alone</li>
        <li>Self management</li>
        </Box>
        </ul>
        </Flex>
        </Box>
        </Flex>

        </div>

    );
}

export default Skills;
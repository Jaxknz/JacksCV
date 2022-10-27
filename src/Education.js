import {Box, Flex, Text} from '@chakra-ui/react';
import './App.css';

const Education = () => {
    return(
      <div className='Education' id="education">
        <Flex className="section"  >
            <Box className="box" >
                <Text className="title">Education</Text>
              
            <Flex className="sectionContent">
                <ul>
                <div class="container">
                  <Text className="studyName">Open Polytechnic Kuratini Tuwhera</Text>
                  <Text className="degree">Bachelor of Information and Technology (2020-2023)</Text>
                  <div class="info">
                    <span>I am currently completing my Bachelor of Information and Technology extramurally and will have completed this by the end of 2023. The course work involves the creation of computer systems; computer language programming; system development and implementation; network design and strategic planning and operational management.  I have completed 16 papers, and have one paper to complete, with a grade average of A-.</span>
                  </div>
                  </div>

                  <div class="container">
                  <Text className="studyName">Open Polytechnic Kuratini Tuwhera</Text>
                  <Text className="degree">New Zealand Diploma in Web Development and Design (2020-2021) </Text>
                  <div class="info">
                    <span>I completed a Diploma in Web Development and Design through the Open Polytechnic (while working at Aidan Kelly Contracting). The course work involved, planning, designing, and coding websites using PHP, CSS, HTML and JavaScript. While completing my Diploma, I held an average grade of A-. </span>
                  </div>
                  </div>

                  <div class="container">
                  <Text className="studyName">Whitireia Polytechnic (now Whitireia and Weltec)</Text>
                  <Text className="degree">National Certificate in Computing (2016) [Level 2]</Text>
                  <div class="info">
                    <span>I completed a certificate in computing at Whitireia Polytechnic, this involved basic coding and project planning. While completing my Certificate I held an average grade of A-. Certificate now discontinued.</span>
                  </div>
                  </div>
                  </ul>
            </Flex>
            
            </Box>
        </Flex>
        </div>
    )

}
export default Education;
import {Box, Flex, Text} from '@chakra-ui/react';
import './App.css';

const About = () => {
    return(
        <div className='About' id="About">
        <Flex className="section">
            <Box className="box" >
                <Text className="title">About</Text>
                <Flex  className="sectionContent" >                           
                 <Text>I currently work full time as Application Support for Intralot NZ, while completing my Bachelor 
                 of Information and Technology through  Open Polytechnic. I describe myself as friendly, approachable, and eager to progress in an industry that I am passionate about. 
                 I am proactive, self-motivated, and a fast learner. I enjoy working within a team, however I’m comfortable completing tasks alone.   
                    I’m looking for the next step in my career and would value an opportunity to expand my admin skills, so I can enhance and build on my existing skill set.

                 <Text className="contact">Contact details</Text>
                 
                 <Text>Phone: <button className="email" onClick={() => window.location = 'tel:0212374960'}>021 237 4960</button></Text>
                <Text>Email: <button className="email" onClick={() => window.location = 'mailto:19jackleonrd99@gmail.com'}>19jackleonard99@gmail.com</button></Text></Text>


                 </Flex>    
                
            </Box>
        </Flex>
        </div>
    )

}
export default About;
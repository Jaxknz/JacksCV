import {Box, Flex, Text} from '@chakra-ui/react';

const Work = () => {
    return(
        <div className='work' id="Work">
        <Flex className="section">
            <Box className="box" >
            <Text className="title">Work Experience</Text>
                <Flex className="sectionContent" >
                
                  <ul className='workStuff'>
                    {/* Treasury details*/}
                    <Box className='jobSections'>
                <Text  className='jobTitle'>The Treasury- Service Desk Analyst
                <Text className='jobLength'>December 2022 – Current</Text>
                <Text className="jobDetails">I currently work for The Treasury; my primary responsibilities are:</Text>
                <Text className="jobDescription">
                <li>Level 1 & 2  support for The Treasury, Department of the Prime Minister and Cabinet, National Emergency Management Agency, and Government House.</li>
                <li>Manual installation of software.</li>
                <li>Documentation of new and existing problems.</li>
                <li>Hardware upgrades and replacement.</li>
                <li>Ordering new hardware for clients.</li>
                <li>Providing meeting room support</li>
                </Text>
                </Text>
                </Box>
                                 {/* Intralot details*/}
                                 <Box className='jobSections'>
                <Text  className='jobTitle'>Intralot NZ - Application Support
                <Text className='jobLength'>April 2021– December 2022</Text>
                <Text className="jobDetails">While working at IntralotNZ,  My primary responsibilities were:</Text>
                <Text className="jobDescription">
                <li>Taking phone calls from clients and service technicians.</li>
                <li>Liaising with off-site contractors to organize equipment replacement.</li>
                <li>Running daily, weekly, and monthly reports and ensuring they are correct.</li>
                <li>Monitoring equipment to ensure it is always operational.</li>
                <li>Testing new software in a test lab to ensure it is compliant.</li>
                <li>Ensuring all equipment in the test lab is functional.</li>
                </Text>
                </Text>
                </Box>
                  {/* Aidan Kelly details*/}
                  <Box className='jobSections'>
                  <Text className='jobTitle'>Aidan Kelly Contracting - Driver/Labourer
                <Text className='jobLength'>July 2018 – April 2021</Text>
                <Text className="jobDetails">My primary responsibilities were:</Text>
                <Text className="jobDescription">
                <li>Carrying out civil duties for Wellington Electricity</li>
                <li>Driving materials from site to site.</li>
                <li>Interacting with clients.</li>
                <li>General laboring tasks.</li>
                <Text className="extra">While working Aidan Kelly I gained my WTR ticket and forklift license.</Text>
                </Text>
                </Text>
                </Box>
                <Box className='jobSections'>
                  {/* McDonalds details*/}
                  <Text className='jobTitle'>McDonald’s Mana – Crew/Maintenance
                <Text className='jobLength'>April 2016 – July 2018</Text>
                <Text className="jobDetails">My primary responsibilities as a Crew member were:</Text>
                <Text className="jobDescription">
                <li>Serving customers</li>
                <li>Ensuring the store was tidy</li>
                <li>Preparing food</li>
                <Text className="extra">I then progressed to the Maintenance role, this involved:</Text>
                <li>Maintenance of equipment around the store.</li>
                <li>Following a regular maintenance program.</li>
                <li>Helping with stock orders and stock intakes.</li>
                <li>Cleaning of the inside and outside of the store.</li>
                </Text>
                </Text>
                </Box>
                </ul>
                </Flex>
            </Box>
        </Flex>
        </div>
    )

}
export default Work;
import {Flex} from '@chakra-ui/react';
import {Link} from 'react-scroll';



const footer = () =>{
    return(
        <div className='footer' id="footer">
        <Flex justify="center" align="center" paddingBottom="5px" paddingTop="30px">
        <Link className='link' to="nav" spy={true} smooth={true} offset={0} duration={500}margin="0 5px">Scroll to top</Link>

        </Flex>
            <Flex paddingBottom="20px" align="center" justify="center">
                    </Flex>
                    </div>
    )
}
export default footer;
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import {Box, Button, Flex, Input, Text, Image, useToast, ChakraProvider, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader,
ModalCloseButton, ModalBody} from '@chakra-ui/react';
import HighRollers from './HighRollers.json';
import Logo from './assets/background/Logo.png';
import './App.css';

const HighRollersAddress = "0x6B2F79abe979Fc93b15c1eb58Ca58EE273fee075";


const MainMint = ({accounts, setAccounts}) =>{
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    var isMintEnabled = true;
    async function connectAccountMetamask(){
        if (typeof window.ethereum !== 'undefined'){
        try{
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }catch(err){
            return(
                toast({
                    title: 'User rejected action',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  })
            )

        }
    }else{
        return(
            toast({
                title: 'Please install Metamask',
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        )
    }
}
    




    async function HandleMint() {
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                HighRollersAddress,
                HighRollers.abi,
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount),{
                        value: ethers.utils.parseEther((0.02 * mintAmount).toString())
                });
                console.log('response: ', response);
                toast({
                    title: 'Processing transaction',
                    status: 'loading',
                    duration: 9000,
                    isClosable: true,
                  })
            }catch(err){
                console.log("error", err);
                return(
                    toast({
                        title: 'User rejected action',
                        description: "MetaMask Tx Signature: User denied transaction signature.",
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                      })
                )
            }
           
        }
    }

     

    const handleDecrement = () =>  {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () =>  {
        if (mintAmount >= 5) return;
        setMintAmount(mintAmount +1);
    };
    return(
        <div className="main" id="main">
        <ChakraProvider>
        <div className="MainMint" id="MainMint">
        <Flex justify="center" align="center"   paddingBottom="130px">
            <Box width="60%">
                <div>
                    {/* Mint info*/}
                    <Image width="150%" align="center"   alt="Jaxk"src={Logo}/>
                    <Text  align="center"fontSize="150%" letterSpacing="-5.5%" fontFamily="Inconsolata" textShadow="0 2px 2px #000000">Max 5 per wallet</Text>
                    <Text align="center"fontSize="130%" letterSpacing="-5.5%" fontFamily="Inconsolata" textShadow="0 2px 2px #000000">0Ξ each</Text>
            </div>
            {/* Mint enabled/connected checks */}
            {isConnected && isMintEnabled ?(
                <div>
                    <Flex align="center" justify="center" >

                        {/* Decrement button */}
                        <Button backgroundColor="#00aeff" 
                        borderRadius="5px" 
                        boxShadow="0px 2px 2px 1px #0F0F0F" 
                        color="white" cursor="pointer" 
                        fontFamily="inherit" 
                        textColor="#000000"
                        fontWeight="extrabold"
                        padding="15px" 
                        marginTop="10px"  
                        onClick={handleDecrement}
                        >
                            -
                        </Button>
                        
                        {/* Mint number display */}
                        <Input 
                        readOnly 
                        fontFamily="inherit" 
                        textColor="#000000"
                        fontWeight="extrabold"
                        width="100px" 
                        height="40px" 
                        bg="white"
                        zIndex="-2"
                        textAlign="center" 
                        paddingLeft="19px" 
                        marginTop="10px" 
                        type="number" 
                        value ={mintAmount}>
                        </Input>
                        
                        {/* Increment button */}
                        <Button 
                        backgroundColor="#00aeff" 
                        borderRadius="5px" 
                        boxShadow="0px 2px 2px 1px #0F0F0F" 
                        color="white" cursor="pointer" 
                        fontFamily="inherit" 
                        fontWeight="extrabold"
                        textColor="#000000"
                        padding="15px" 
                        marginTop="10px" 
                        onClick={handleIncrement}
                        >
                            +
                            </Button>
                        </Flex>
                        {/*Mint button */}
                        <Flex justify="center" align="center"paddingBottom="20px">
                        <Button 
                            backgroundColor="#00aeff"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color='white'
                            cursor="pointer"
                            fontFamily="inherit"
                            fontWeight="extrabold"
                            textColor="#000000"
                            padding="10px"
                            margin="0 15px"
                            onClick={()=>{
                            HandleMint()}}
                            >
                             Mint
                            </Button>
                            </Flex>
                            <Flex justify="center" align="center"  >
                            <Box >
                            <Text  padding="2px"width="100%" display="block"><Text textColor="#00aeff" fontSize="20px">Connected wallet: </Text>{accounts}</Text>
                            </Box>
                            </Flex>
                </div>
            ) : (
                    <Flex paddingTop="10px" justify="center">
                    {isMintEnabled ?(
                <Box>
                         <Button
                         size="sm"
                backgroundColor="#00aeff"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color='white'
                cursor="pointer"
                fontFamily="inherit"
                textColor="#000000"
                margin="0 15px"
                onClick={onOpen}
                >
                    Connect
                </Button>
                <Text className="connectText" fontSize="130%"> You must be connected to mint</Text>
                </Box>
                ) : (
                    <Text className="connectText" fontSize="150%"> Mint date: TBC</Text>
                )}
                </Flex>
            )}
            <Modal textColor="#00aeff" motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent bg="#343434" border="2px" borderStyle="solid" borderColor="#00aeff" borderRadius="50px" shadow=" 0 0 10px #00aeff" paddingBottom="20px">
                <ModalHeader><Text textColor="#ffffff" align="center">Select provider</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody textColor="#00aeff">
                    <Box>
                    <Link   width="100%" onClick={() => {connectAccountMetamask(); onClose();}}  isExternal><Image bg="#2a2a2a"   className="linkWalletM"width="100%"boxSize="100%" /></Link>
                    </Box>
                    <Flex paddingTop="20px" justify="center" align="center">
                        {!window.ethereum ? (
                    <Box className='linkInstall'width="50%" align="center" bg="#00aeff">
                    <a  target="_blank" rel="noreferrer" href="https://metamask.io/download/">Install Metamask</a>
                    </Box>
                    ):(console.log('Metamask already installed')
                    
                    )} 
                    </Flex>

           </ModalBody>
              </ModalContent>
            </Modal>
           
            </Box>
        </Flex>
        </div>
        </ChakraProvider>
        </div>
        
    );
    
};

export default MainMint;

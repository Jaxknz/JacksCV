// SPDX-Licence-Identifier: UNLICENCED
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract HighRollers is ERC721, Ownable{
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('HighRollers', 'HR'){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 10000;
        maxPerWallet = 5;

        //set withdraw wallet
    }
    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner{
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner{
        baseTokenUri = baseTokenUri_;
    }
    function tokenURI(uint256 tokenId_) public view override returns (string memory){
        require(_exists(tokenId_), 'Token does not exist');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }   
    function withDraw() public payable onlyOwner{
        (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(success, 'withdraw failed');
    }

    function mint(uint256 quantity_) public payable{
        require(isPublicMintEnabled, 'Minting is not enabled');
        require(msg.value == quantity_ * mintPrice, 'Wrong mint value');
        require(totalSupply + quantity_ <= maxSupply, 'Sold out');
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'Exceeds max wallet mints');

        for(uint256 i = 0; i < quantity_; i ++){
            uint256 newTokenId = totalSupply +1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}
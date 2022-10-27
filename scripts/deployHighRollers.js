
const hre = require("hardhat");

async function main() {

  const HighRollers = await hre.ethers.getContractFactory("HighRollers");
  const highRollers = await HighRollers.deploy();

  await highRollers.deployed();

  console.log("HighRollers deployed to:", highRollers.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

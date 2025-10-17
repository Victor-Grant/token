const hre = require("hardhat");

const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("Victor");
  const token = await contractFactory.deploy();
  const tokenAddress = await token.getAddress();
  console.log("contract deployed to: ", tokenAddress);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

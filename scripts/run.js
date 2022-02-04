const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //compiles our contract and generate the necessary files we need to work with our contract under the artifacts directory. hre is imported from hardhat.config.js
  const waveContract = await waveContractFactory.deploy(); //initializes a local ethereum network to deploy our contract
  await waveContract.deployed(); //waits for the contract to be deployed
  console.log("Contract deployed to:", waveContract.address); //prints the address of the deployed contract
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

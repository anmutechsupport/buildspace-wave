
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); //compile our contract and generate the necessary files we need to work with our contract under the artifacts directory
    const waveContract = await waveContractFactory.deploy(); //spins up a local ethereum network
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address); // address of smart contract

    let waveCount;
    waveCount = await waveContract.getTotalWaves(); 

    waveTxn = await waveContract.connect(randomPerson).wave(); //connects the contract to an address other than the owner
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
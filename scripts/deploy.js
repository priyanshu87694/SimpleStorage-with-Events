const hre = require("hardhat")

async function main() {
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage")
  const simpleStorage = await SimpleStorage.deploy()
  await simpleStorage.deployed()
  const transactionResponse = await simpleStorage.store(1)
  const transactionReceipt = await transactionResponse.wait()
  
  console.log(`oldNumber: ${transactionReceipt.events[0].args.oldNumber.toString()}`)
  console.log(`newNumber: ${transactionReceipt.events[0].args.newNumber.toString()}`)
  console.log(`addedNumber: ${transactionReceipt.events[0].args.addedNumber.toString()}`)
  console.log(`senderAddress: ${transactionReceipt.events[0].args.sender.toString()}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

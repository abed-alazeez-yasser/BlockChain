const sha256 = require("crypto-js/sha256");
const SHA256 = require("crypto-js/SHA256");
class Block {
  constructor(index, prevHash, timestamp, data) {
    this.index = index;
    this.prevHash = prevHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calcHash(index, prevHash, timestamp, data);
  }
  calcHash(index, prevHash, timestamp, data) {
    return SHA256(index + prevHash + timestamp + data).toString();
  }
}
//test
const genesisBlock = new Block(0, "", 7561615, "ab");
let BlockChain = [genesisBlock];

const GetLastBlock = () => BlockChain[BlockChain.length - 1];

const calcHash = (index, prevHash, timestamp, data) => {
  return SHA256(index + prevHash + timestamp + data).toString();
};
const calcBlockHash = (Block) => {
  return SHA256(
    Block.index + Block.prevHash + Block.timestamp + Block.data
  ).toString();
};

//     console.log(genesisBlock);
//     console.log(calcHash(0, '' ,'7.333',"ab"));

const CreateNewBlock = (data = (data) => {
  const prevBlock = GetLastBlock();
  const index = prevBlock.index + 1;
  const prevHash = prevBlock.hash;
  const timestamp = new Date().getTime();
  return new Block(index, prevHash, timestamp, data);
});
const IsBlockStrcutreValid = (Block) => {
  return (
    typeof Block.index === "number" &&
    typeof Block.prevHash === "string" &&
    typeof Block.timestamp === "number" &&
    typeof Block.data === "string" &&
    typeof Block.hash === "string"
  );
};

// const isBlockValid = (Block, prevBlock) => {
//   if (IsBlockStrcutreValid(Block) && IsBlockStrcutreValid(prevBlock)) {
//     if (prevBlock.index === Block.index - 1) {
//       if (prevBlock.hash == Block.hash) {
//         if (calcBlockHash(Block) == Block.hash) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };
const AddBlock = (Block) => {
  if (isBlockValid(Block, GetLastBlock())) {
    BlockChain.push(Block);
  }
};

/*const GetBlockChain = () => BlockChain;
const IsBlockChainValid = (GetBlockChain) => {
  if (calcBlockHash(GetBlockChain()[0]) === calcHash(0, "", 7561615, "ab")) {
    for (let i = 1; i < GetBlockChain().length; i++) {
      console.log(i);
      if (!isBlockValid(GetBlockChain[i], GetBlockChain[i - 1])) {
        console.log("Error at Block ", GetBlockChain[i]);
        return false;
      }
    }
  }
  return true;
};
*/
const newBlock = CreateNewBlock("abed alazeez yasser ");
newBlock.data = "abed alazeez yasser100 ";
console.log(IsBlockChainValid(GetBlockChain()));

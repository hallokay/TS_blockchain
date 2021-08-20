import * as CryptoJs from "crypto-js";

interface Human {
  name: string;
  age: number;
  gender?: string;
}

const person = {
  name: "kay",
  age: 25,
  gender: "male",
};

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}


const genesisBlock: Block = new Block(0, "2020202020", "", "hello", 123465);

let blockchain: Block[] = [genesisBlock];
console.log(blockchain);

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length -1];
const getNewTimeStamp = () : number => Math.round(new Data().getTime() / 1000);

export {};

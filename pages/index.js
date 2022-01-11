import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import { useEffect, useState } from "react";
import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";

export default function Home() {
  return <div className={styles.container}></div>;
}

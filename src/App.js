import React from 'react';
import './App.css';
import Web3Data from './components/Web3Data.js';


import { useWeb3 } from '@openzeppelin/network/react';
const infuraProjectId = '41155b0c91304dc6acce1fa42cf5c04f';
function App() {
const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
return (
<div className="App">
  <div>
  <h1>Infura React Dapp with Components!</h1>
  <Web3Data title="Web3 Data" web3Context={web3Context} />
  </div>
</div>
);
}
export default App;
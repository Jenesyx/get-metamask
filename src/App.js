import React from 'react';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Header from './components/Header/Header';

function App() {

  const [Address, setAddress] = useState(null)

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    signer.getAddress().then((result)=>{setAddress(result)});
  }

  const disconnectWallet = () => {
    setAddress(null);
  }

  return (
    <div className="App">
      <Header connectWallet={connectWallet} disconnectWallet={disconnectWallet} Address={Address} setAddress={setAddress}/>
    </div>
  );
}

export default App;

import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route, 
 } from "react-router-dom";

import './App.css';
import Homepage from './components/Homepage';
import Validators from "./components/Validators";
import Blocks from './components/Blocks';
import BlocksDetail from './components/Blocks/detail';
import TransactionDetail from './components/Blocks/transaction_detail';
import Transaction from './components/Blocks/transaction';
import IBCRelayers from './components/IBCRelayers';
import IBCDetail from './components/IBCRelayers/Details';
import Dashboard from './components/Dashboard';
import Proposals from './components/Proposals';
// import Assets from './components/Assets';
import Parameters from './components/Parameters';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Assets from './pages/Assets'
import Validator2 from "./pages/Validator2";

const App = () => {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element= {<Homepage />} />
          <Route exact path="/validators" element={ <Validators />} />
          <Route path="/blocks" element={ <Blocks />} />
          <Route path="/blocksDetail/" element={ <BlocksDetail />} />
          <Route path="/transactionDetail/" element={ <TransactionDetail />} />
          <Route path="/transaction" element={ <Transaction />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/ibcRelayers" element={ <IBCRelayers />} />
          <Route path="/ibcDetail" element={ <IBCDetail />} />
          <Route path="/proposals" element={ <Proposals />} />
          {/* <Route path="/assets" element={ <Assets />} /> */}
          <Route path="/parameters" element={ <Parameters />} />

          <Route path="/assets" element={ <Assets />} />
          <Route path="/validator2" element={ <Validator2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
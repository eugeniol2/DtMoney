import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal';
import { Header } from "./components/Header";





export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  } 

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }




  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      
      
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>
      <GlobalStyle />
      
      
    </>
  );
}



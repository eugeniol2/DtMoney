import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { Header } from "./components/Header";
import { TransactionsProvider } from "./styles/TransactionsContext";





export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  } 

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }




  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      
      
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>
      <GlobalStyle />
      
      
    </TransactionsProvider>
  );
}



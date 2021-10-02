import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
//import { api } from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { useTransactions } from '../../hooks/useTransactions'



interface newTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }:newTransactionModalProps) {

    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    

    const {createTransaction} = useTransactions();
    

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction(
            {
            
            title,
            amount,            
            category,
            type

            }
            
        )

        

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();

    }

    return (

        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}     
        overlayClassName="react-modal-overlay" 
        className="react-modal-content" 
        ariaHideApp={false}
        >

            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close">
                <img src={closeImg} alt="fecharModal" />

            </button>
            <Container onSubmit={handleCreateNewTransaction}>

            <h2>Cadastrar transação</h2>

            <input 
             placeholder="Título"
             value={title}
             onChange={event => setTitle(event.target.value)}
            />

            <input 
            type="number"
            placeholder="Valor" 
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox 
                type="button"
                onClick={() => {setType('deposit')}}
                isActive={type === 'deposit'}
                activeColor="green"
                >
                    <img src={incomeImg} alt="entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                type="button"
                onClick={() => {setType('withdraw')}}
                isActive={type === 'withdraw'}
                activeColor="red"
                
                >
                    <img src={outcomeImg} alt="saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
            placeholder="categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}            
            />

            <button type="submit">
                Cadastrar
            </button>
            </Container>
        </Modal>
    );
}
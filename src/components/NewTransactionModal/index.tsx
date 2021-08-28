import Modal from 'react-modal';
import { Container, TransactionTypeContainer  } from './style';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';


interface newTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }:newTransactionModalProps) {


    return (

        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}     
        overlayClassName="react-modal-overlay" 
        className="react-modal-content" 
        >

            
            <Container>

            <h2>Desgraca</h2>

            <input
             placeholder="Título"
            />

            <input type="number"
            placeholder="Valor" 
            />

            <TransactionTypeContainer>
                <button type="button">
                    <img src={incomeImg} alt="entrada" />
                    <span>Entrada</span>
                </button>
                <button>
                    <img src={outcomeImg} alt="saída" />
                    <span>Saída</span>
                </button>
            </TransactionTypeContainer>

            <input 
            placeholder="categoria"            
            />

            <button type="submit">
                Cadastrar
            </button>
            </Container>
        </Modal>
    );
}
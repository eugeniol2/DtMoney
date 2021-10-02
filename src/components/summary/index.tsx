
import Entradas from "../../assets/Entradas.svg";
import Saídas from "../../assets/Saídas.svg";
import Total from "../../assets/Total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";





export function Summary(){

    const {transactions} = useTransactions()

    
    const summary = transactions.reduce((acc, transactions) => {
        if (transactions.type === "deposit"){
            acc.deposit += transactions.amount;
            acc.total += transactions.amount;
        }
        else if (transactions.type === "withdraw"){
            acc.withdraw += transactions.amount
            acc.total -= transactions.amount;
        }

    return acc; 
            
    },{
        deposit: 0,
        withdraw: 0,
        total: 0,
    })
      


    return (
        
        <Container>
            <div>
                <header>
                    <h1>Entradas</h1>
                    <img src={Entradas} alt="Entradas" />
                </header>
                <strong>
                    R$: {summary.deposit}
                </strong>
            </div>
            <div>
                <header>
                    <h1>Saídas</h1>
                    <img src={Saídas} alt="Entradas" />
                </header>
                <strong>
                    R$: {summary.withdraw}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <h1>Total</h1>
                    <img src={Total} alt="Entradas" />
                </header>
                <strong>
                    R$: {summary.total}
                </strong>
            </div>
        </Container>
        
        
        
    )
}
import { Container } from "./style";
import Entradas from "../../assets/Entradas.svg";
import Saídas from "../../assets/Saídas.svg";
import Total from "../../assets/Total.svg";



export function Summary(){
    return (
        
        <Container>
            <div>
                <header>
                    <h1>Entradas</h1>
                    <img src={Entradas} alt="Entradas" />
                </header>
                <strong>
                    R$: 12.400,00
                </strong>
            </div>
            <div>
                <header>
                    <h1>Saídas</h1>
                    <img src={Saídas} alt="Entradas" />
                </header>
                <strong>
                    R$: 1.400,00
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <h1>Total</h1>
                    <img src={Total} alt="Entradas" />
                </header>
                <strong>
                    R$: 500,00
                </strong>
            </div>
        </Container>
        
        
        
    )
}
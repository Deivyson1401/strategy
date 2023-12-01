import { multiplicacao, soma, subtracao } from "./operacoes"

class strategy {
    firtNumber: number
    secondNumber:number
    operador: string
    constructor(firtNumber: number, secondNumber:number, operador: string){
        this.firtNumber = firtNumber
        this.secondNumber = secondNumber
        this.operador = operador
    }

    checkOperador(): void {
        switch (this.operador) {
            case '+':
            const soma_number = new soma(this.firtNumber, this.secondNumber)
            soma_number.execute()
                break;
            case '-':
                const subtracao_number = new subtracao(this.firtNumber, this.secondNumber)
                subtracao_number.execute()
                    break;
            case '*':
                const multiplicacao_number = new multiplicacao(this.firtNumber, this.secondNumber)
                multiplicacao_number.execute()
                    break;
            default:
                console.log('operador inválido');
                break;
        }
    }
}

export {strategy}
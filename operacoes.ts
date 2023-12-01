import { exe } from "./interface";

class soma implements exe{
    firtNumber: number
    secondNumber:number
    constructor(firtNumber: number, secondNumber:number,){
        this.firtNumber = firtNumber
        this.secondNumber = secondNumber
    }
    execute(): void {
        console.log(this.firtNumber+this.secondNumber);
    }
}

class subtracao implements exe{
    firtNumber: number
    secondNumber:number
    constructor(firtNumber: number, secondNumber:number,){
        this.firtNumber = firtNumber
        this.secondNumber = secondNumber
    }
    execute(): void {
        console.log(this.firtNumber-this.secondNumber);
    }
}

class multiplicacao implements exe{
    firtNumber: number
    secondNumber:number
    constructor(firtNumber: number, secondNumber:number,){
        this.firtNumber = firtNumber
        this.secondNumber = secondNumber
    }
    execute(): void {
        console.log(this.firtNumber*this.secondNumber);
    }
}

export {soma,subtracao,multiplicacao}

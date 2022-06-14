class Calculadora {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior; 
        this.displayValorActual = displayValorActual;
        this.valorAnterior = "";
        this.valorActual = ""; 
        this.operador = "";
    }
    
    mostrarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return; 
        this.valorActual = this.valorActual.toString() + numero.toString(); 
        this.imprimirDisplay(); 
    }

    operacion(operador){
        this.operador !== "=" && this.calcular();
        if (operador === "=") {
            this.operador = "";
        } else{
            this.operador = operador;
        }
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = ""; 
        this.imprimirDisplay();
    }

    calcular(){
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);
        if(isNaN(valorActual) || isNaN(valorAnterior)) return;
        if (this.operador === "+") {
            this.valorActual = valorAnterior + valorActual;       
        } else if (this.operador === "-") {
            this.valorActual = valorAnterior - valorActual;
        } else if (this.operador === "x") {
            this.valorActual = valorAnterior * valorActual;
        } else if (this.operador === "/") {
            if (valorActual === 0) {
                this.valorActual = "No se puede dividir por 0";
                return this.imprimirDisplay();
            }
            this.valorActual = valorAnterior / valorActual;
        } else if (this.operador === "%") {
            this.valorActual = (valorAnterior * valorActual) / 100; 
        }
    
    }

    imprimirDisplay(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.operador}`;
    }

    limpiar(){
        this.valorAnterior = "";
        this.valorActual = ""; 
        this.operador = "";
        this.imprimirDisplay();
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirDisplay();
    }
}
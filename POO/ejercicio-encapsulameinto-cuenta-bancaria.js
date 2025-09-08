class cuentaBancaria {
    #saldo

    constructor(titular, saldoInicial) {
        this.titular = titular
        this.#saldo = saldoInicial

    }

    // Get: Método público para ver saldo
    verSaldo() {
        console.log(`El saldo de ${this.titular} es: ${this.#saldo}`);
    }

    // Set: Método público para depositar
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Depósito de $${monto} realizado`);
        } else {
            console.log(`Monto inválido`);
        }
    }

    // 
    retirar(monto) {
        if (monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`Retiro de $${monto} realizado. Saldo actual: ${this.#saldo}`);
        } else {
            console.log(`Fondos insuficientes`)
        }

    }
}

const cuenta = new cuentaBancaria('Sam', 1000)

cuenta.verSaldo();
cuenta.depositar(500);
cuenta.verSaldo();
cuenta.retirar(200);


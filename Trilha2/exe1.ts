class ContaDeBanco {
  private titulo: string;
  private saldo: number;

  constructor(titulo: string, saldoInicial: number) {
    this.titulo = titulo;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): number {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado com sucesso.`);
    return this.saldo;
  }

  sacar(valor: number): number {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente');
      return this.saldo;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso.`);
    return this.saldo;
  }

  consultarSaldo(): number {
    console.log(`Saldo atual: R$${this.saldo}`);
    return this.saldo;
  }
}


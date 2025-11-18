abstract class Pagamento {
  abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
  private numeroCartao: string;

  constructor(numeroCartao: string) {
    super();
    this.numeroCartao = numeroCartao;
  }

  private validarCartao(): boolean {
    
    return this.numeroCartao.length === 16;
  }

  processar(): void {
    if (!this.validarCartao()) {
      console.log(" Cartão inválido. Pagamento não processado.");
      return;
    }

    console.log(` Pagamento no cartão ${this.numeroCartao} foi processado com sucesso.`);
  }
}

class PagamentoBoleto extends Pagamento {
  private valor: number;

  constructor(valor: number) {
    super();
    this.valor = valor;
  }

  private gerarCodigoBoleto(): string {
/// inventei para simular nao achei no portal 
    return "34191.79001 01043.510047 91020.150008 7 123400000" + this.valor;
  }

  processar(): void {
    const codigo = this.gerarCodigoBoleto();
    console.log(`📄 Boleto gerado com sucesso! Código: ${codigo}`);
  }
}

function processarPagamentos(pagamentos: Pagamento[]) {
  pagamentos.forEach((pagamento, index) => {
    console.log(`\n🔹 Processando pagamento ${index + 1}:`);
    pagamento.processar();
  });
}



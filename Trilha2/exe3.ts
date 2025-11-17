class Produto {
  private nome: string;
  private preco: number;
  private quantidade: number;


  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  valorTotalEstoque(): number {
    const total = this.preco * this.quantidade;
    return total;
  }
    exibirInformacoes(): void {
    console.log(
      ` Produto: ${this.nome}\n💲 Preço: R$${this.preco}\n Quantidade: ${this.quantidade}\n Valor total em estoque: R$${this.valorTotalEstoque()}`
    );
  }
}
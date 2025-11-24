interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  nome: string;
  preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  exibirInfo(): void {
    console.log(`ID: ${this.id} | Nome: ${this.nome} | Preço: R$${this.preco}`);
  }
}


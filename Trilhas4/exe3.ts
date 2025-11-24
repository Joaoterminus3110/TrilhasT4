interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  private produtos: ProdutoLoja[] = [];

  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find((produto) => produto.codigo === codigo);
  }
}

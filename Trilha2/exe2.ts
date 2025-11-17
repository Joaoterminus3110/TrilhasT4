class Livro {
  private titulo: string;
  private autor: string;
  private paginas: number;
  private lido: boolean;

  constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido(): boolean {
    if (this.lido) {
      console.log(`O livro "${this.titulo}" já foi lido.`);
      return true;
    }

    this.lido = true;
    console.log(`Você acabou de marcar "${this.titulo}" como lido!`);
    return this.lido;
  }

  verificarLeitura(): boolean {
    if (this.lido) {
      console.log(` "${this.titulo}" já foi lido.`);
    } else {
      console.log(` "${this.titulo}" ainda não foi lido.`);
    }
    return this.lido;
  }
}


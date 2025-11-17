class cachorro {

    constructor(nome : string  idade : number){
        this.nome = nome;
        this.idade = idade;
    }

    getnome() : string {
        return this.nome;
    }

    getidadedecachorro() : number {
        return this.idade * 7;
    }
}


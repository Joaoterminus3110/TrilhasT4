type Endereco = {
    rua: string,
    numero : number,
    cidade : string
}

function getEndereco(endereco : Endereco) : string {
    return `${endereco.rua}, ${endereco.numero} - ${endereco.cidade}`;
}

console.log (getEndereco({
    rua : `São Jose`,
    numero : 123,
    cidade : `Campo Mourão`

}))

function filtrarArray(coisas :any []) : number[] {
    return coisas.filter(coisas => typeof coisas === 'number');


}
console.log(`Linha Filtradas : ${filtrarArray([`A`, true, 2,30,4])}`)
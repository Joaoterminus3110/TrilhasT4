function getEndereco(endereco) {
    return "".concat(endereco.rua, ", ").concat(endereco.numero, " - ").concat(endereco.cidade);
}
console.log(getEndereco({
    rua: "S\u00E3o Jose",
    numero: 123,
    cidade: "Campo Mour\u00E3o"
}));
function filtrarArray(coisas) {
    return coisas.filter(function (coisas) { return typeof coisas === 'number'; });
}
console.log("Linha Filtradas : ".concat(filtrarArray(["A", true, 2, 30, 4])));

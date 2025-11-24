/// essa atros aqui pega tudo e obriga os outro a usar ela lembra de estudar

abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  private raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

class Quadrado extends FiguraGeometrica {
  private lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}

class Triangulo extends FiguraGeometrica {
  private base: number;
  private altura: number;
///soma lembra de estudar 
  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

/// função para somar tudo ultra importante lembra de estudar 
function imprimirAreas(figuras: FiguraGeometrica[]) {
  figuras.forEach((figura, index) => {
    console.log(`Figura ${index + 1}: área = ${figura.calcularArea()}`);
  });
}

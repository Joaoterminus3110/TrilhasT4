class Animal {
  private energia: number;

  constructor(energiaInicial: number = 50) {
    this.energia = energiaInicial;
  }

  protected alterarEnergia(valor: number): void {
    this.energia += valor;

    if (this.energia < 0) {
      this.energia = 0;
    }
  }

  comer(): void {
  
    this.alterarEnergia(10);
  }

  statusEnergia(): void {
    console.log(`🔋 Energia atual: ${this.energia}`);
  }
}

class Leao extends Animal {
  comer(): void {
    console.log("🦁 O leão está caçando...");


    this.alterarEnergia(-20);

    console.log("🦁 O leão capturou a presa e está comendo...");
    this.alterarEnergia(35);
  }
}

class Passaro extends Animal {
  comer(): void {
    console.log("🐦 O pássaro está beliscando sementes...");
  }
}


function alimentarAnimais(animais: Animal[]) {
  animais.forEach((animal, index) => {
    console.log(`\n🔹 Animal ${index + 1}:`);
    animal.comer();
    animal.statusEnergia();
  });
}


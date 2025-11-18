abstract class Funcionario {
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  protected getSalario(): number {
    return this.salario;
  }

  protected getNome(): string {
    return this.nome;
  }

  
  abstract calcularBonus(): number;

  salarioComBonus(): number {
    return this.salario + this.calcularBonus();
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.10; 
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05; 
  }
}


function calcularSalarioComBonus(funcionarios: Funcionario[]) {
  funcionarios.forEach((func, index) => {
    console.log(`\n👤 Funcionário ${index + 1}: ${func['getNome']?.() || 'Sem nome exposto'}`);
    console.log(`💵 Salário final: R$${func.salarioComBonus()}`);
  });
}



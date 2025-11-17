class Agenda {
  private compromissos: string[] = [];

  adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
    console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
  }

  listarCompromissos(): void {
    if (this.compromissos.length === 0) {
      console.log('Nenhum compromisso agendado.');
      return;
    }

    console.log('📅 Lista de compromissos:');
    this.compromissos.forEach((c, i) => {
      console.log(`${i + 1}. ${c}`);
    });
  }
}


class Temperatura {
  private celsius: number;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  converterParaFahrenheit(): number {
    const fahrenheit = (this.celsius * 9) / 5 + 32;
    return fahrenheit;
  }

  exibirConversao(): void {
    console.log(
      ` ${this.celsius}°C equivalem a ${this.converterParaFahrenheit()}°F`
    );
  }
}


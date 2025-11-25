// Classe abstrata: modelo base de qualquer inventário
abstract class Inventory {
  protected items: Record<string, number> = {}; // objeto com nome do item e quantidade

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

// Subclasse: armazém (sem limite)
class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (this.items[item]) {
      this.items[item] += quantity;
    } else {
      this.items[item] = quantity;
    }
    console.log(`📦 Adicionado ${quantity}x "${item}" ao armazém.`);
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
      console.log(`❌ Item "${item}" removido do armazém.`);
    } else {
      console.log(`⚠️ Item "${item}" não encontrado no armazém.`);
    }
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

// Subclasse: loja (limite de 10 unidades por item)
class StoreInventory extends Inventory {
  private readonly LIMIT = 10;

  addItem(item: string, quantity: number): void {
    const atual = this.items[item] || 0;
    const novoTotal = atual + quantity;

    if (novoTotal > this.LIMIT) {
      console.log(`⚠️ Limite excedido: "${item}" não pode ter mais de ${this.LIMIT} unidades.`);
      this.items[item] = this.LIMIT; // trava no limite
    } else {
      this.items[item] = novoTotal;
      console.log(`🛒 Adicionado ${quantity}x "${item}" à loja.`);
    }
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
      console.log(`❌ Item "${item}" removido da loja.`);
    } else {
      console.log(`⚠️ Item "${item}" não encontrado na loja.`);
    }
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}


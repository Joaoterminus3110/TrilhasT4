
abstract class TaskManager2 {
  protected tasks: Set<string> = new Set();

  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}


class Project2 extends TaskManager2 {
  private nomeProjeto: string;

  constructor(nomeProjeto: string) {
    super();
    this.nomeProjeto = nomeProjeto;
  }

  addTask(task: string): void {
    if (this.tasks.has(task)) {
      console.log(`⚠️ A tarefa "${task}" já existe no projeto ${this.nomeProjeto}.`);
    } else {
      this.tasks.add(task);
      console.log(`✅ Tarefa "${task}" adicionada ao projeto ${this.nomeProjeto}.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}


class DailyTasks2 extends TaskManager2{
  private data: string;

  constructor(data: string) {
    super();
    this.data = data;
  }

  addTask(task: string): void {
    if (this.tasks.has(task)) {
      console.log(`⚠️ A tarefa diária "${task}" já foi adicionada em ${this.data}.`);
    } else {
      this.tasks.add(task);
      console.log(`✅ Tarefa diária "${task}" adicionada em ${this.data}.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}



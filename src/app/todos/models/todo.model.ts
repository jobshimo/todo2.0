

export class Todo {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().getTime() + Math.random();
    this.completed = false;
  }
}

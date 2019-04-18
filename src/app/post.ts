export class Post {

  title: string;
  content: string;
  counter: number;
  date: Date;

  constructor(title: string, content: string, counter: number) {
    this.title = title;
    this.content = content;
    this.counter = counter;
    this.date = new Date();
  }

}

import Beta from "./beta";

export default class Alpha extends Beta {
  name: string = "deepak";
  id: number = 7;

  constructor(name: string, id: number) {
    super();
    this.name = name;
    this.id = id;
  }

  printParentClass(): void {
    console.log(this.TAG);
  }

}

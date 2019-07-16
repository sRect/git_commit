class Test {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(this.name);
  }
}
const test = new Test("jack");

test.sayHello();

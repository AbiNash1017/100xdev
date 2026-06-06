/*
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

*/

class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    speak(){
        console.log("hi there "+ this.speaks);
    }
    // Static method - n JavaScript is a method that belongs to the class itself, not to instances of the class. You define it using the static keyword inside a class.
    static category() {
        return "Living beings";
    }
}

let dog= new Animal("dog",4,"bhow bhow");//create object
let cat= new Animal("cat",4,"meow meow");

cat.speak();//call function on object

console.log(Animal.category()); // you call it directly on the class, not on objects created from the class.
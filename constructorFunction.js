function Person(firstname,secondname){
this.firstname=firstname;
this.secondname= secondname ;
this.greeting = function() {
    console.log("helloooo!");
};
}

let person1 = new Person("kami","laure");
console.log(person1.firstname);
person1.greeting();
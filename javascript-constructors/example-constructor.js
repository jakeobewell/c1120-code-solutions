function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype', typeof ExampleConstructor.prototype);

var x = new ExampleConstructor();

console.log('value of x:', x);

var p = (x instanceof ExampleConstructor);
console.log('value of p:', p);

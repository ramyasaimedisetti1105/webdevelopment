// let var and const
var a = 20;
console.log(a);

var a = 40;
console.log(a);

let b = 60;

console.log(b);

b = 80;

console.log(b);

const c = 80;

{
  let b1 = 40;
  var b2 = 60;
  console.log("b1", b1);
}

console.log("b2", b2);
console.log(b1);
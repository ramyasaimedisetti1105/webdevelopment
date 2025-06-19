let arr = [50, 60, 7, 0, 89, 6];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let obj = { name: "mavin", roll: 340, company: "Techvol" };

// for in loop
for (let x in obj) {
  console.log(x, obj[x]);
}

for (let x in arr) {
  console.log(arr[x]);
}

//for of loop
console.log("print using for of loop");
for (let x of arr) {
  console.log(x);
}

//while loop

let i = 0;
console.log("printing from while loop");
while (i < 6) {
  console.log(arr[i]);

  i++;
}
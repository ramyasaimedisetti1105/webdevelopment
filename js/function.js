function fun(params) {
    console.log(params);
    //logic
  }
  
  fun(10);
  
  // in javascript functions are called higer order function;
  
  function Test() {
    console.log(20); //--> call back function
  }
  
  function main(params) {
    params();
  }
  
  main(Test);
  
  //Arrow functions ES6
  
  let ArrowFunction = (a, b) => {
    //logic
    console.log(a, b);
  };
  
  ArrowFunction(2300, 500);
  
  let arr2 = (_) => {
    console.log("new fun");
  };
  
  arr2();
  
  //Ananymous functions
  
  let AnanymousFun = function () {
    console.log("Calling from anonymous function");
  };
  
  AnanymousFun();
  
  setTimeout(function () {
    console.log("Set Timeout Function");
  }, 60000 * 7);
  
  setInterval(() => {
    console.log("setInterval Function");
  }, 1000);
//closure - inner function is able to excess the varible of outer function in their lexical env.
// question-1

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//question 2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// at firt console.log(count)  the out put is 1 becouse it was in the funcion of if codition

//second console.log the out put is 0

// question 3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); 
    }, 1000);
  }

//   question-4 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function length(L){
    function height(H){
        return L*H
    }
    return height(20)
}
console.log(length(10))

// question 5
// Take a variable in outer function and create an inner function to increase the counter every time it is called
const outer = ()=>{
    let n = 0;
    inner = function(){
      return n++;
    } ;
    return inner;
  }
  const result = outer ();
  console.log(result());
  console.log(result());
  console.log(result());
  console.log(result());

//question 6


var a = 12;
(function () {
  console.log(a);
})();


//question 7

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();

// question 8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
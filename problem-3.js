// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

//SOLUTION

testFunction = function(primeFactor){

  let factors = [];

  let d = 2;

  while(primeFactor>1){
    while(primeFactor % d ===0){
      factors.push(d);
      primeFactor /= d;
    }
    d = d + 1;
  }

  return factors[factors.length-1];

}

console.log(testFunction(600851475143 ));

//Exercise 1
//1
let integer = 1;
let float = 1.2;
//2
let addition = integer + float;
let subtraction = float - integer;
let multiplication = integer * float;
let division = float / integer;
let modulus = float % integer;
let exponentiation = integer ** float;
//3
console.log(`Addition equals ${addition}`);
console.log(`Subtraction equals ${subtraction}`);
console.log(`Multiplication equals ${multiplication}`);
console.log(`Division equals ${division}`);
console.log(`Modulus equals ${modulus}`);
console.log(`Exponentiation equals ${exponentiation}\n`);
//Exercise 2

//1
let isInteger = (float == integer);
console.log(isInteger);

//2
let x = 8;
let y = 12;
let isGreater = (x > y);
let isLessOrEqual = (x <= y);
let isEqual = (x==y);
let isNotEqual = (x!=y);
console.log(`\nis X greater than Y: ${isGreater}`);
console.log(`is X less than or equal to: ${isLessOrEqual}`);
console.log(`is X equal to Y: ${isEqual}`);
console.log(`is X not equal to Y: ${isNotEqual}`);

//3
let a = true;
let b = false;
console.log("\n");
console.log(a&&b);
console.log(a||b);
console.log(!a);

//4
let p=10;
console.log("\n");
console.log(p+=2);
console.log(p-=3);
console.log(p*=4);
console.log(p/=3);
console.log(p%=7);
//Exercise 1: Temperature check
let temperature = 15;
if(temperature<0)
{
    console.log("It's freezing!");
}
else if(temperature>=0 && temperature<=15)
{
    console.log("It's cold");
}
else if(temperature>=16 && temperature<=25)
{
    console.log("It's mild");
}
else if(temperature>25)
{
    console.log("It's warm");
}
switch(true)
{
    case temperature<0:
        console.log("It's freezing!");
        break;
    case temperature>=0 && temperature<=15:
        console.log("It's cold");
        break;
    case temperature>=16 && temperature <=25:
        console.log("It's mild");
        break;
    case temperature>25:
        console.log("It's warm");
        break;
    default:
        console.log("Invalid temperature")
}

//Exercise 2: Divisbility Check
let number = 67;
if(number%2==0 && number%3==0)
{
    console.log("Divisible by both");
}else if(number%2==0)
{
    console.log("Divisible only by 2");
}else if(number %3==0)
{
    console.log("Divisible only by 3");
}
else
{
    console.log("Not divisible by 2 or 3");
}
switch(true)
{
    case number%2==0 && number%3==0:
        console.log("Divisible by both");
        break;
    case number%2==0:
        console.log("Divisible only by 2");
        break;
    case number%3==0:
        console.log("Divisible only by 3");
        break;
    default:
        console.log("Not divisible by 2 or 3");
}

//Exercise 3: For loops
//1
console.log("\n");

for(i=1;i<=10;i++)
{
    console.log(i);
}
//2
console.log("\n");
for(even=1;even<=20;even++)
{
    if(even%2==0)
    {
        console.log(even);
    }
}
//3
console.log("\n");
let number_3_total = 0;
for(t=1;t<=100;t++)
{
    number_3_total = number_3_total + t;
}
console.log(`number 3 total is ${number_3_total}`);
//4
console.log("\n");
const numbers = [1,2,3,4,5];
for(i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
//5
let largest_number = 0;
const numbers_set = [3,7,2,5,10,6];
for(i=0;i<numbers_set.length;i++)
{
    if(numbers_set[i]>largest_number)
    {
        largest_number = numbers_set[i];
    }
}
console.log(`\nThe largest number is ${largest_number}`);

//Exercise 4: While loops
//1
console.log(`\n`);
let while_loop = 1;
while(while_loop<=10)
{
    console.log(while_loop);
    while_loop++;
}

//2
console.log('\n');
while_loop = 1;
while(while_loop<=20)
{
    if(while_loop%2==0)
    {
        console.log(while_loop);
    }
    while_loop++;
}
//3
console.log('\n');
let while_loop_total = 0;
let new_while_loop = 1;
while(new_while_loop<=100)
{
    while_loop_total = while_loop_total + new_while_loop;
    new_while_loop++
}
console.log(`While loop total ${while_loop_total}`);   
//4
console.log('\n')
while_loop = 1;
while(while_loop<=50)
{
    if(while_loop%5==0)
    {
        console.log(while_loop);
    }
    while_loop++;
}

//Exercise 5: Do while loops
//1
console.log("\n");
let do_while = 1;
do
{
    console.log(do_while);
    do_while++;
}while(do_while<=10);

//2
console.log("\n");
let sum = 1;
let total = 0;
do
{
    total = total + sum;
    sum++;
}
while(sum<=100)
console.log(`total: ${total}`);
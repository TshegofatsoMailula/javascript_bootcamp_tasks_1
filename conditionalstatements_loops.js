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
//Exercise 5: Do while loops
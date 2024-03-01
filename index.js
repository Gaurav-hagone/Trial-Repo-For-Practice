// 1.Ways to print in javascript.
// there i faced a problem in linking index.js to index.html as I did not comment out the above line so there was an error in linking as it was linked but not was showing the output 

console.log("Hello world");
alert("Hello");
alert("me");
alert("Rom Rom Bhaiyyo");
alert("Rom Rom Gaurav");
document.write("this is document writer");

console.log("Hello world");
alert("me");
alert("Rom Rom Bhaiyyo");
alert("Rom Rom Gaurav");
document.write("this is document writer");



// 2.Javascript console api

console.log("Hello World", 4 + 6 , "Another log");
console.warn("This is a warning");
console.error("This is an error");
console.log("Thala for a reason- 7")
console.log("Thala for a reason- 07")



// 3.Javascript variales
// What are variables? Containers to store variables
/*multi 
line
comment*/

var n1=34;
var n2=66;
console.log(n1+n2);


// 4.Data types in javascript

// numbers datatypes
var num1=134;
var num2=45.66;
console.log(num1);
console.log(num2);

// string datatypes
var str1="This is a first string"
var str2="This is a second  string"
console.log(str1);
console.log(str2);

//Objects datatypes
var marks={
    ravi:36,
    shubham:79,
    harry:99.50
}
console.log(marks);
/*this is not necessary to console log here in vs code we can print it also when we write console.log() in inspect console to print the same value there*/

//Booleans datatypes
var a=true;
var b=false;
console.log(a);
console.log(b);
// or we can write directly
console.log(a,b);

//undefined datatypes
// var und=undefined;
//or we can directly write var und; it will print the same
var und;
console.log(und);

//null datatypes
var n=null;
console.log(n);

//arrays datatypes
var arr=[1,2,3,4,5,"bablu","dablu"]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
// To print any string or number in the array on the console use its pre-sequence number in the square bracket inside the console   

// At a very high level, there are two types of datatypes in javascript only 
// 1.Primittive data types:
// Number,string,boolean,undefined,null,symbol(not learnt yet and not imp much here)
// 2.Reference data types:
// Arrays and Objects

//Operators in Javascript

//Arithmetic Operators
var a=100;
var b=10;
let c= 50;
console.log("The value of a+b is",a+b);
console.log("The value of a-b is",a-b);
console.log("The value of a*b is",a*b);
console.log("The value of a/b is",a/b);

console.log("The value of a+c is",a+c);
console.log("The value of a-c is",a-c);
console.log("The value of a*c is",a*c);
console.log("The value of a/c is",a/c);

//Assignment Operators
//ek baar assign value assign karne ke baad no need to write var while using c+=5 badme
var c=10;
c +=5; //c=c+5
console.log(c);
var d=c;
d -=5; //d=d-5
console.log(d);
var e=c;
e *=5; //e=e*5
console.log(e);
var f=c;
f /=5; //f=f/5
console.log(f);

//Comparision Operators
var x=34;
var y=56;
console.log(x==y); //dono agar equal hue toh true milega
console.log(x>=y); //agar x is greater than or equals to y rahega toh true milega same for others
console.log(x<=y);
console.log(x>y);
console.log(x<y);

// Logical Operators

// AND operator behaves like AND gate
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR operator
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// NOT operator
console.log(!true);
console.log(!false);

//We will not learn Bitwise operators here we do not have its need here it will be helpful for those who works on Boolean algebra


//Functions in Javascript
//DRY= Don't repeat yourself
function avg(a,b){
    c=(a+b)/2;
    return c;
}
d=avg(45,25);
console.log(d);

// New function sum of two
function sum(a,b){
    c=(a+b);
    return c;
}
console.log(5,9);

// New function difference of two
function diff(a,b){
    c=(a-b);
    return c;
}
console.log(57,9);


//Conditionals in Javascript

//single if
var age=31;
if(age > 18){
    console.log('You are Matuared guy');
}
if(age < 18){
    console.log('You are a kid');
}

//if - else statements
var age=12;
if (age > 18){
    console.log("You are a matuared guy");
}
else{
    console.log("You are a kid");
}

//if - else ladder
var age=88;
if (age > 75){
    console.log("you are a old person now");
}
else if(age > 50){
    console.log("you are a senior citizen now");
} 
else if (age > 35){
    console.log("you need to eat calcium tablets now");
}
else if(age> 18){
    console.log("you are jawan now");
}
else{
    console.log("you are kid now");
}
//ladder ends here


let a=88;
if (a > 75){
    console.log("you are a old person now");
}
else if(a > 50){
    console.log("you are a senior citizen now");
} 
else if (a > 35){
    console.log("you need to eat calcium tablets now");
}
else if(a> 18){
    console.log("you are jawan now");
}
else{
    console.log("you are kid now");
}




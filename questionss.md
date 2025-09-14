# Virtusa Experience - Node

Typescript-comp A to com B pass json with props
Redis
Get redis cache
Persistance storage in sql
Write command for pagination in sql
Performance optimisation in node JS
Load balancing
How to fast our performance or how to check if some api is taking time
Vite

Suggestion
Graph QL
SQL, MONGO

Performance optimisation
1.From Caching storing data temporarily so that every time api should not take much time
2.⁠ ⁠Indexing

Virtusa- Client Discussion L1
Make a custom component for dropdown
Explain about projects you have done

PWC - MERN Stack
Lazy loading - not just about DOM - we can do that using if less, why lazy loading, how it improve performance
How to check performance of react application - need to check
Flat nested array also remove null and undefined
Generate incremental id on backend mongo or sql
Like s3 aws,
First learn DB - then node js
Assume token time 15 minutes, user logout in 5 mins only, 10 min remaining so anyone can run postman and do changes …how to handle that,
Why saga not thunk
Microservices- is it on micro services
Macrofrontend - how to call files to different micro frontend layers.
React query vs react toolkit query
What if promise takes more time to resolve than settimeout time - which runs first
Aggregate in mongo, have you used that?

# LTIMindtree
val();
console.log(a)
var a = 10;
var val = ()=>{
console.log("val")
}

const a = { b:10,c:20};
const b = {c:30};
a = b;

const data=[1,2,3,3,4,6];
const output=[];
data.filter((ele)=>{
if(!output.includes(ele)){
output.push(ele)
}
})
console.log("output", output)

const data2="priyanka";
let output2="";
for(i=data2.length-1;i>=0;i--){
output2=output2.concat(data2[i]);
}
console.log("output2",output2)

ES6 features
Hoisting
Closure with example
This keyword
how arrow function different from regular other than syntax
Redux
Let var const
Typescript vs javascript
Middleware
Api- to call and show data in react
Rest apis
Structure of node folders
Express
How to implement express
Jest test
How to mock functions
Bootstrap, why its is effective or useful
Mongo db different from traditional
HTML semantic elements
Type interference
Replica Set
Sharding
Map vs filter

LTIMindtree 2nd Round
Clusters in node.js
Optimisation of node.js
Message queue vs direct api
Web socket
Kafka
Api gateway
Ec2 vs lambda
Testing on node.js
Authentication-authorization
React.memo
Task to counter increment
Describe vs it
How to mock functions
Write query to fetch top 5 employee whose salary are desc

Nitor Infotech - Cobee

Write query to select 2nd largest query in sql and mongo
Git command
Difference between rebase and merge
If your feature branch is behind main, how will you update it before merging
API versioning
Write jest test case for a function factorial
How to get known for latest trends in Technology- by subscribing mails
Background processes multithreading basically- your api is taking too much time in loading the data -then how to run on background thread
Debounce
Redux flow write
Hooks, semantic elements, restful apis, error handling in node
Indexes in mongo

Round 2 Nitor - SELECTED
Basic react 15 min only

Capgemini

const obj1={
name:'priyanka',
showName: function(a,b){
console.log("Hi",this.name, a,b)
}
}

const obj2={
name:'Rani'
}
const result= obj1.showName.apply(obj2,["26","25"]);

// greetings();
// var greetings = function(){
// console.log('first greerting');
// };
// greetings();
// function greetings(){
// console.log('second greeting');
// }
// greetings();

//swisis to s3w1i2
const str= "swisis";

const arr= str.split('');
let obj={};
const result=arr.reduce((acc,init)=>{
if(obj.hasOwnProperty(init)){
let index=acc.indexOf(init);
acc[index+1]+=1;
obj[init]+=1
}else{
acc=acc+init+'1'
obj[init]=1;
}
},'')

console.log(result)

const http= require('http');
const server = http.createServer();
server.listen(8000,()=>{
console.log("running on 8000")
})

T5.10- M3E3R5N3 Noida Noida MCR TCS by Pandey, Avinash

JavaScript:

What is Call, bind, apply? explain with example.

greetings();
var greetings = function(){
console.log('first greerting');
};
greetings();
function greetings(){
console.log('second greeting');
}
greetings();

second greeting
first greeting
first greeting

swisis to s3w1i2
Write hook for showing user is available or not , online or not, like in teams
Write an custom hook to replicate useState hook?
How React render works?
Output based for useEFFECT
What is batching ?
What if I want to render each state not batching- flushSync

NodeJS:
What is memory leak and how you handle it?
What is middleware and how its work?
Create server in node js not in express

First Source L1
Npm I vs npm run build
How to integrate package that we made in second repo, to our first repo project
Npm pack
useMemo, Lazy Loading
Event loop
Sorting
Second largest from array
Display cards in optimised way
Typescript prop state
Handle error and Validations in node js
How you are Optimizing the react app to 40%

First Source L2
Explain virtual Dom
Where virtual Dom data got stored
Explain pagination implementation on front and backend side both, how to render data , in architecture way, as 6 year senior ans
3rd highest salary person
How to modify the virtual dom things
Child to parent how to pass
Local storage
What if local storage not available then how do you store that data , where you store and why
Cookie, different in session and cookies
Any other way to
How to optimise and improve performance of you api, fetch and axios are just method to do , how you improve restful api performance
Secure your node js application
Rate-limiter

const data=[
{ "id": 1, "name": "abc", "salary": 10000 },
{ "id": 2, "name": "abc1", "salary": 12000 },
{ "id": 3, "name": "abc2", "salary": 14000 },
{ "id": 4, "name": "abc3", "salary": 15000 },
{ "id": 5, "name": "abc4", "salary": 12000 },
{ "id": 6, "name": "abc5", "salary": 13000 },
{ "id": 7, "name": "abc6", "salary": 14000 },
{ "id": 8, "name": "abc7", "salary": 15000 }
]

console.log(thirdHighestSalary(data));
Screen not got shared
Feedback- give answers in articitecture way, learned from you take it as compliment

Vinove Round 1
Shadow dom vs virtual dom
Next.js
Nested lookup
Components class vs functional
State and prop
Node architecture

InfoGain round 1
Opacity vs visibility
webAccessibility
Make program to show box color according to input in pure js only , not react
Hooks
UseEffect
Child to parent how to pass
Tabindex-> -1,0,1

const arr=[4,3,2,7,8,2,3,1,10];// 5,6,9

let min=arr[0];
let max=arr[0];
for(i=0;i<arr.length;i++){
if(min>arr[i]){
min= arr[i]
}
if(max<arr[i]){
max= arr[i]
}
}
let output=[];
for(i=min; i<max; i++){
if(!arr.includes(i)){
output.push(i)
}
}
console.log(output)

<!--
Online HTML, CSS and JavaScript editor to run code online.
-->
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="style.css" />
<title>Browser</title>
</head>

<body>
<h1>
Write, edit and run HTML, CSS and JavaScript code online.
</h1>
<input type='text' id='input' onchange={handleChange}/>
<p>
Our HTML editor updates the webview automatically in real-time as you write code.
</p>
<!-- <div class='box' style=⁠ background-color=${defaultColor} ⁠></div> -->
<button tabindex="2">Button 2</button>
<button tabindex="1">Button 1</button>
<button tabindex="0">Button 0</button>
<button>Button default</button>
<button tabindex="-1">Button -1</button>
<script src="script.js"></script>
</body>

</html>
body {
margin: 20px;
}

.box{
width:100px;
height:100px;
background-color:'red';
}

console.log("from script file");
export const handleChange=()=>{
const data= document.getDocumentId('input').value;

}

export const defaultColor='red';

Capgemini L1
Team lead questions,
Debouncing
Security in react
Saga
API handling
useEffect
JWT token
Redux

Unison Consultion Round 1
Write CRUD with express
Program- const data= "I am good"; //output: good
Write how to read data from a file
Optimization in react
contextAPI and Redux
webSocket
Basic JS output based
const data= "I am good hi gfcghvj"; //output: good

const arrayParts=data.split(' ');
let max=0;
let output='';
for(i=0;i<arrayParts.length;i++){
if(max<arrayParts[i].length){
max=arrayParts[i].length
output=arrayParts[i]
}
}
console.log(output)

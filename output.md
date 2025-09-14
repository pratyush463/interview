val();
console.log(a)
var a = 10;
var val = ()=>{
console.log("val")
}

//solution
var a;
var val;

val(); // ❌ val is undefined here -> TypeError
console.log(a); // won't execute because of the error
a = 10;
val = () => {
console.log("val");
}
output error val is not a function
/////////////////////////////////////////

const a = { b:10,c:20};
const b = {c:30};
a = b;
////////////////////////////////////////
greetings();
var greetings = function(){
console.log('first greerting');
};
greetings();
function greetings(){
console.log('second greeting');
}
greetings();

output////////////////////////
second greeting
first greeting
first greeting

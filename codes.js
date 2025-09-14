// reverse a string
const data2 = "priyanka";
let output2 = "";
for (i = data2.length - 1; i >= 0; i--) {
  output2 = output2.concat(data2[i]);
}
console.log("output2", output2);

//swisis to s3w1i2

// let  data = [

//   {

//     "person":"a",

//     "fruit":"apple"

//   },

//   {

//     "person":"c",

//     "fruit":"pineapple"

//   },

//   {

//     "person":"d",

//     "fruit":"banana"

//   },

//   {

//     "person":"e",

//     "fruit":"banana"

//   },

//   {

//     "person":"f",

//     "fruit":"apple"

//   }

// ]

// output

//  {

//   "apple":["a","f"],

//   "banana":["d","e"],

//   "pineapple":["c"]

//  }

let output1 = {};

data.map((obj) => {
  if (output1[obj.fruit]) {
    output1[obj.fruit].push(obj.person);
  } else {
    output1[obj.fruit] = [obj.person];
  }
});

console.log(output1);

//  1. find the frequency of each element in array

const frequency = (array) => {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

console.log(frequency(array));

// 3.find the max frequency element in array

let obj = {};
let max = 0;
let result = [];
const maxfrequency = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }

    if (obj[char] > max) {
      result = [char];
      max = obj[char];
    } else if (obj[char] === max && !result.includes(char)) {
      result.push(char);
    }
  }

  return { result, max };
};

// find duplicates in an array

const findDuplicates = (array) => {
  let seen = new Set();
  let duplicates = new Set();
  for (item of array) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
};

console.log(findDuplicates([1, 2, 3, 4, 4, 5, 5]));

// Output: [ 4, 5 ]
// By using obj and checking the frequency of each element
const findDuplicate = (array) => {
  let obj = {};
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }

    if (obj[char] > 1) {
      output.push(char);
    }
  }
  return output;
};
console.log(findDuplicate([1, 1, 2, 3, 4, 4, 5, 5]));

//Remove duplicates from an array we can use filter map for loop anything with same logic
const removeDuplicates = (array) => {
  let output = [];
  array.filter((arr) => {
    if (!output.includes(arr)) {
      output.push(arr);
    }
  });

  return output;
};
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5]));

// Remove duplicates from an array using filter and indexOf
const removeDuplicate = (array) => {
  const output = array.filter((arr, index) => array.indexOf(arr) === index);

  return output;
};
console.log(removeDuplicate([1, 2, 3, 4, 4, 5, 5]));

// reverse a array
const ReverseArray = (arr) => {
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
};
console.log(ReverseArray([1, 2, 3, 4, 5]));
// check if a string is palindrome we can do it by using output also above by comparing output === arr
const palindromeString = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(palindromeString("jijo"));

// convert array to object
const arr = [1, 2, 3, 4, 5];

const arrayObject = (arr) => {
  let output = {};

  for (let i = 0; i < arr.length; i++) {
    output[i] = arr[i];
  }
  return output;
};

console.log(arrayObject(arr));

// object to array

const obj1 = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };

const objectconvert = (obj1) => {
  let output = [];
  for (key in obj1) {
    output.push(obj1[key]);
  }
  return output;
};
console.log(objectconvert(obj1));

//first non repeating character

const arr1 = "ppratyush";
const obj2 = {};
for (let i = 0; i < arr1.length; i++) {
  let char = arr1[i];
  if (obj2[char]) {
    obj2[char]++;
  } else {
    obj2[char] = 1;
  }
}

let output = null;
for (let i = 0; i < arr1.length; i++) {
  if (obj2[arr1[i]] === 1) {
    output = [arr1[i]];
    break;
  }
}

console.log("Frequency map:", obj2);
console.log("First non-repeating character:", output);

//flat aray
let output3 = [];
const flatArrayflatArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray(arr[i]);
    } else {
      output3.push(arr[i]);
    }
  }
  return output3;
};

console.log(flatArray([1, 2, [3, 4, [6, 9]]]));

// const str = "i am  good"

// const arr = str.split(" ");
// // console.log(arr)

// let max=0;
// let longest = ""
// for(let i =0 ; i<arr.length ; i++){

// if(arr[i].length > max){
//   max = arr[i].length
//   longest = arr[i]

// }
// }
//  console.log(longest)

//
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr1[i] > arr1[j]) {
      let x = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = x;
    }
  }
}

console.log(arr1);

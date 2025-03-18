//1

let person = {
  name: '이승아',
  age: 25,
  isStudent: true
};

// 2

let fruits = ['Banana', 'Orange', 'Apple'];
console.log(fruits[1]);

function add(a, b) {
  return a + b;
}

console.log(add(3,4));

// 1

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

let array = [1, 2, 3, 4, 5];
for (let num in array) {
  console.log(`${array[num]}`);
};

// 2
let upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperFruits);

// 3

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function mixArr(arr1, arr2) {
  let result = arr1.map((element, index) => {
    return element + arr2[index];
  });
  return result;
}

console.log(mixArr(arr1, arr2));

// 1

let newPerson = JSON.parse(JSON.stringify(person));

console.log(newPerson);

// 2

const users = [
  { name: "Jhon", age: 25},
  { name: "Jabne", age: 17},
  { name: "Doe", age: 18}
];

let adultUsers = users.filter(user => user.age >= 18)
      .map(user => user.name);

console.log(adultUsers);
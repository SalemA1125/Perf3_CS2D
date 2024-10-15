// Combine two arrays using concat() method
let names1 = ["Cecile", "Lone"];
let names2 = ["Emil", "Tobias", "Linus"];
let combinedNames = names1.concat(names2);
console.log(combinedNames); // Logs the combined array of names

// Add a new element to the end of the fruits array using push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // Displays the fruits array with "Kiwi" added

// Insert elements at the beginning of arr3 using unshift()
let numbers = [1, 2, 3];
numbers.unshift(4, 5);
console.log(numbers); // Logs the updated array with "4" and "5" added at the start

// Remove the last element from the fruits array using pop()
fruits.pop();
console.log(fruits); // Displays the fruits array after removing "Kiwi"

// Remove the first element from numbers array using shift()
numbers.shift();
console.log(numbers); // Logs the updated array after removing "4"

// Sort the elements in the fruits array alphabetically using sort()
fruits.sort();
console.log(fruits); // Displays the sorted array of fruits

// Extract a portion of the fruits array using slice()
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Logs a new array containing elements from index 1 to 2

// Modify the months array by replacing elements using splice()
let months = ["January", "February", "March", "April"];
months.splice(2, 1, "May", "June");
console.log(months); // Displays the array after replacing "March" with "May" and "June"

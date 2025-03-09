let arr1 = [1, 2, 3];
let arr2 = arr1;  // Copying the reference, NOT the value

arr2.push(4);  // Modifying arr2

console.log(arr1);  // Output: [1, 2, 3, 4]
console.log(arr2);  // Output: [1, 2, 3, 4]

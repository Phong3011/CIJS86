//trắc nghiệm:
// Câu 1: 2
// Câu 2 : 1
// Câu 3 : 1
// Câu 4 : 3
// Câu 5 : 4
// Câu 6 : 1
// Câu 7 : 3
// Câu 8 : 2
// Câu 9 : 1
// Câu 10 : 2
// Câu 11 : 3
// Câu 12 : 2
// Câu 13 : 4

//thực hành
//bai1

// function reverseString(str){
// 	return str.split('').reverse().join('');
// }
// const string = "abcdef"
// const stringJoin = reverseString(string);
// console.log(stringJoin);

//bai2
// function unique_arr(arr){
// 	return Array.from(new Set(arr))
// }
// let myArray = [1, 2, 3, 5, 4, 2, 6, 4]
// console.log(unique_arr(myArray));

//bai3
// function array_unique(array) {
//   array.sort();

//   let max = [0, 0];

//   let count = 1;
//   for (let i = array.length - 1; i > 0; --i) {
//     if (array[i] == array[i - 1]) ++count;
//     else {
//       if (max[1] < count) {
//         max[0] = array[i];
//         max[1] = count;
//       }
//       count = 1;
//     }
//   }
//   console.log("values " + max[0] + "count" + max[1]);
// }

// let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
// array_unique(array);



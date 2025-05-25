// 1. count vowels in the word

// function countVowels(str){
//   let count =0
//   let vowels = 'aeiouAEIOU';
//   for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVowels('suyog'))

// 2. first letter upper case of word

// function toLittle(word){
//   return word.split(" ").map((item)=> item[0].toUpperCase() + item.slice(1)).join(" ")
// }

// console.log(toLittle('hello world'))

// 3. Check if two strings are anagrams
// function areAnagrams(str1, str2) {
//   return str1.split("").sort().join("")===str2.split("").sort().join("")
// }
// console.log(areAnagrams("listen", "silent"));

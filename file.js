// 1. "find perfect number"

// function perfectNumber(num){
//   let sum=0;
//   for(let i=1;i<num;i++){
//     if(num%i===0){
//       console.log(num,i)
//       sum += i
//     }
//   }
//   if(sum===num){
//     return 'perfect number'
//   }else{
//     return 'not perfect number'
//   }
// }

// console.log(perfectNumber(12))

// 2. prime number

// function primeNumber(num){
//   let flag = false;
  
//   for(let i=2;i<num;i++){
//     if(num%i===0){
//       flag = true
//     }
//   }
//   return flag?'not prime number':'prime number'
// };

// console.log(primeNumber(13))

// 3. fibonacci series

//recursive
// function fibonacciSeries(num,a=0,b=1,result=[]){
//   if(num===0) return result;
//   result.push(a);
//   return fibonacciSeries(num-1,b,a+b,result)
// }

// console.log(fibonacciSeries(6))

//non-recurcive
// function fibonacciSeries(num){
//   let result=[];
//   let a=0;
//   let b=1;
//   for(let i=0;i<num;i++){
//     result.push(a);
//     let next = a+b;
//     a=b;
//     b=next
//   }
//   return result;
// }

// console.log(fibonacciSeries(5))

// 4. factorial
// function findFactorial(num){
//   let fact=1;
//   for(let i=1;i<= num;i++){
//     fact = fact * i;
//   }
//   return fact;
// };
// console.log(findFactorial(4))

// 5. palindrome 

//number
// function palindromeNumber(num){
//   let stringNumber = num.toString();
//   let result='';
//   for(let i = stringNumber.length-1 ;i >=0 ;i-- ){
//     result += stringNumber[i]
//   }
  
//   return stringNumber===result?'palindrome number':'not palindrome number';
// };

// console.log(palindromeNumber(65856))

//string
// function palindromeString(val){
//   let result='';
//   for(let i = val.length-1 ;i >=0 ;i-- ){
//     result += val[i]
//   }
  
//   return val===result?'palindrome string':'not palindrome string';
// };

// console.log(palindromeString('madama'))

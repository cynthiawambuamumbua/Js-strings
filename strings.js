//How do you find the missing number in a given integer array of 1 to 100?
function findMissedNum(arrayOfNumbers, n = 100) {
    if(arrayOfNumbers.length === n) {
      console.log("no number is missed");
    }
    if(arrayOfNumbers.length < (n - 1) ) {
      console.log("more than one number is missed")
    }
    let totalSum = (n * (n+1)) / 2;
    let sumOfArray = 0;
    
    for(let i of arrayOfNumbers){
        sumOfArray += i;
    }
    
    return totalSum - sumOfArray;
}
let arrayOfNumbers = Array.from( Array(101).keys())
arrayOfNumbers.shift();
arrayOfNumbers.splice(50, 1)
let missedNum = findMissedNum(arrayOfNumbers, 100);
console.log("The missing number is :", missedNum)

// How do you find the duplicate number on a given integer array? 
function removeDuplicates(nums){
      let index = 0
       newArr = [];
      nums= arrayOfNumbers.length;
        //  for (let i = 0; i < nums.length - 1; i++) {
            for (let j = nums+1; j < nums.length; j++) {
            if (arr[nums] === arr[j]) {
                  newArr[index] = arr[nums];
                  index++;
               }
            }
            return newArr
         }
      
let nums= [6, 9, 15, 6, 13, 9, 11, 15];
console.log(removeDuplicates.nums)
//How do you find the largest and smallest number in an unsorted integer array
const numberArr = [13, 192, 90, 23, 4, 6];
const highest = Math.max(...numberArr);
const lowest = Math.min(...numberArr);
console.log("Highest Number: " + highest);
console.log("Lowest Number: " + lowest); 
//How do you find all pairs of an integer array whose sum is equal to a given number
let numbers = [3,6,4,5,2,1,5,2]
for (num1 = 1, #numbers){
	let first = numbers[i]
	// for (j = i, #numbers){
		 num2 = numbers[j]
		if ((first + second) == 10){
			print(first, second)
    }
  }
  

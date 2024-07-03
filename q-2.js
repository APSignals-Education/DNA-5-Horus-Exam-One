// ? // ? You are given an array of numbers (it's more than 2 numbers in that) you should write a function that returns only odd or even number in array
//  ! Examples [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// ![160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
// in each array exist just *one* odd or even value You should return that value in the function
function findOutlier(integers) {
  let odd = 0;
  let even = 0;
  let arr = [];
  for(const num of integers){
    if(Math.abs(num)%2 == 0) {
      arr.push(0)
    }
    else {
      arr.push(1)
      
    }

  }
  //[0, 1, 1, 1]

  let sum = 0
  arr.forEach(number => {
    sum += number;
  });
  if(sum>1) return integers[arr.indexOf(0)];
  else return integers[arr.indexOf(1)]

}


console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.
let armstrongNumbers = [];

// write your loop here...


for (let i = 1; i < 999; i++) {

    
    let sum = 0;

    let convString = i.toString();
    let stringSplit = convString.split('');
    // 
    stringSplit.forEach(function(value, index){

        sum += Math.pow(value,3);
        
    });
// console.log('sum: ',sum, "i:",i)
if (sum == i) {
  armstrongNumbers.push(i);
}

}

console.log(armstrongNumbers);




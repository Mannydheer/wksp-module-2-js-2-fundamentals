// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp


// This function Math.max will return the greater value #

let maxValue = 0;
function acceptInt (value1, value2) {
    
    maxValue = Math.max(value1,value2);
    return maxValue;
}

acceptInt(5,10);
console.log(maxValue);






// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?





// Q2c
// Would this work with more integers? 
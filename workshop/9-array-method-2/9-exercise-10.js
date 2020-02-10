// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

//must declare outside as GLOBAL 
let averageCal = 0;


function calculateAverage(grades) {
    //declare vaiables. 
    let storeGrade = 0;
    //will keep track fo how many index in the arrays. 
    let countEach = 0;
        grades.forEach(function(gradeItem)
        {
            //store each grade into the storegrade var as iterate through foreach. 
           storeGrade += gradeItem
           countEach++;
        });
    
    //calcualte the avg.
    avgCal = Math.floor(storeGrade/countEach);

    //IF ELSE WILL CHECK AND RETURN CORRECT LETTER GRADE. 
    if (avgCal < 60) {
      return "F";
    }
    else if (avgCal <70) {
      return "D";
    }
    else if (avgCal < 80) {
      return "C";
    }
    else if (avgCal < 90) {
      return "B";
    }
    else if (avgCal  < 100) {
      return "A";
    }




   
    
    }
    
    
    //return C
    console.log(calculateAverage([76, 60, 83, 100, 78]));


    // return D
    console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));









 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well



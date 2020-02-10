// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)



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
    
    //calcualte the avg and round it. 
    return Math.floor(storeGrade/countEach);
    
    }
    
    console.log(calculateAverage([76, 60, 83, 100, 78]));
    
// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q6
// Adds "Hello " to every element of greet
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]

function greet(lst) {
    // lst is an array of strings
    let addhello = lst.map(function(nameholder) {
        return ("Hello ".concat(nameholder));
        
    })
    return addhello;

}
// -------------------------------------------------------------------------
console.log('Q6 greet()', greet(['David', 'Billy', 'Lisa', 'Jennifer']));


//using map more efficient than using foreach because it will add each element to a new array
// rather than overriding it when using foreach. Map will make a copy of the original array and change each
// index value. 
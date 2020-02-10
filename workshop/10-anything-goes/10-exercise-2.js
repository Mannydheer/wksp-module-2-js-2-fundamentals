// HINT:
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Q2
// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that
// is to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.

function countChar(str, char) {

    let stringHolder;
    stringHolder = str.split('');
  
     let bCount = 0;
      for (i = 0; i < stringHolder.length; i++)
      {
          //char holds the letter for which we want to check for. 
        if (stringHolder[i] == char) {
          bCount++;
        }
      }
      
    return bCount;
       
    }
  
  
  
  
  // -------------------------------------------------------------------------
  //since we are calling our function, everytime we call, it will calculate based on each call out. 
  console.log('Q2: ', countChar('BananaBabyBubbles', 'u'));
  console.log('Q2: ', countChar('BananaBabyBubbles', 'a'));
  console.log('Q2: ', countChar('BananaBabyBubbles', 'Z'));
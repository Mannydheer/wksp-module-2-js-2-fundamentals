# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);

//new array with everything in it. 
```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join();

//returns the array as a string. 
```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
2. `.indexOf()`, `.push()` 
3. `.pop()`, `.sort()`
4. `.shift()`, `.unshift()`
5. `.reverse()`, `.lastIndexOf()`
6. `.splice()`, `.toString()`

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

---

[Next lecture: Functions](../lecture-8-functions)

1. 

--INCLUDES
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
-As soon as it hits sister and found it, it will stop. 

let summer = ['annoying, 'sister', 'warrior'];
console.log(summer.includes('sister'));
//
true
console.log(summer.includes('sis'));
//false.

--SLICE
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

example:

let veg = ['carrot', 'celery' , 'cabbage' , 'brocoli'];
const cruciferousVeg = veg.slice(2,4);
//console.log(cruciferousVeg);
['cabbage, brocolli']


2. .IndexOf()

let yoda = ['size','matters','not'];
let jedi = yoda.indexOf('not');
console.log(jedi);
2 

 .push()
let outfit = ['shoes', 'pants', 'shirt'];
(outfit.push('hat', 'purse', 'coat'));
console.log(outift);

3. .pop()

let outfit = ['shoes', 'pants', 'shirt'];
(outfit.pop('shirt'));
console.log(outift);

//removes shirt


.unshift 
adds in the begnning
6. 

let stringExample = []
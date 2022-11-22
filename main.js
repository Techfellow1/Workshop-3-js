// #1

// let student = {
//     name: 'giorgi',
//     faculty: 'law',
//     age: '25'
// }

// let student = '';
// for (const property in student) {
//   console.log (person_1);
// }

// #2


// const array1 = ["Einstein", "Newton ", "Tesla", "Galilei"];

// for (const element of array1) {
//     console.log(element);
//   }


// #3

let array = [1, 5, 35, 65, 87, 120, 175, 220, 260]; 
    let max = 0;
    for(let i=0; i<array.length; i++ ) {
       if(array[i]>max) {
          max = array[i];
       }
    }
    return max;

    let min = array[0];
   
    for(let i=0; i<array.length; i++ ) {
       if(array[i]<min) {
          min = array[i];
       }
    }
    return min;


    // #4


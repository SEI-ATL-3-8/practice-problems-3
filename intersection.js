// input: 2 arrays
// output: 1 array
// edge cases: could an input array be length == 0? yes, and then our output should be an empty array

// pseudocode
// start an empty output array
// take the first element of the first array
// compare it to all the elements of the second array
// if you find a match, push it into the output array
// repeat lines 8 & 9 for all elements in the first array
// return output

const intersection = (array1, array2) => {
  // let output = []
  // for (let el1 of array1) {
  //   // if (array2.indexOf(el1)) {
  //   //   output.push(el1)
  //   // }
    
    
  //   for (let el2 of array2) {
  //     if (el1 === el2) {
  //       output.push(el1)
  //     }
  //   }
  // }

  // return output

  let output = []
  let inventoryObj = {}
  for (el1 of array1) {
    inventoryObj[el1] = true
  }

  console.log(inventoryObj);

  for (el2 of array2) {
    if (inventoryObj[el2] === true) {
      output.push(el2)
    }
  }
  
  return output
}

const sampleArray1 = [0, 1, 4, 5, 8]
const sampleArray2 = [0, 2, 7, 9, 4]

const result = intersection(sampleArray1, sampleArray2)
console.log(result);
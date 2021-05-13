
// [0, 1, 1, 2, 3, 5]


const fibonacci = (n) => {
  // if (n === 0) { return 0 }
  // if (n === 1) { return 1 }
  
  // let sequence = [0, 1]

  // while (sequence.length <= n) {
  //   let lastNum = sequence[sequence.length - 1] 
  //   let secondToLastNum = sequence[sequence.length - 2]
  //   let newNum = lastNum + secondToLastNum
  //   sequence.push(newNum)
  // }

  // return sequence[sequence.length - 1]

  if (n === 0) { return 0 }
  if (n === 1) { return 1 }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
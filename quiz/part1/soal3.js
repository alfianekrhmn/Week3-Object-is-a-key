function cariMedian(arr) {
    let arraySorted = arr.sort((a, b) => a - b)
    let median = 0
    if(arraySorted.length % 2 == 1){
        median = arraySorted[Math.floor(arraySorted.length / 2)]
    }else{
        median = (arraySorted[arraySorted.length / 2] + arraySorted[arraySorted.length / 2 - 1]) / 2
    }
    return median
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
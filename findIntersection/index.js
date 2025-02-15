function findIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}

function firstFactorial(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

function firstFactorial(n) {
    if (n === 1) return 1
    return n * firstFactorial(n - 1)
}

console.log(firstFactorial(4));
console.log(findIntersection([1, 3, 4, 7], [2, 3, 7, 10])); // [3, 7]
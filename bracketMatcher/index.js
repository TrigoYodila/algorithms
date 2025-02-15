function bracketMatcher(str){
    let countBracket = 0

    for (let char of str) {
        if(char === '(') countBracket++
        if(char === ')') countBracket--

        if(countBracket < 0){
            return false
        }
    }

    return countBracket === 0
}

console.log(bracketMatcher("(hello (world))"))
console.log(bracketMatcher("(hello (world)"))
console.log(bracketMatcher(")("));          
console.log(bracketMatcher("(()())")); 
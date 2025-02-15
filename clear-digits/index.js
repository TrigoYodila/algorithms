const removeDigits = (s) => {
    let arr = s.split("")

    console.log("Arr ", arr)
    console.log("Arr test ", /\d/.test(arr.join("")))

    while(/\d/.test(arr.join(""))){
        let digitIndex = arr.findIndex(char => /\d/.test(char))

        if(digitIndex === -1) break;

        for(let i = digitIndex - 1;i >= 0; i--){
            if(/\d/.test(arr[i])){
                arr.splice(i,1)
                break;
            }
        }

        arr.splice(digitIndex - 1, 1)
    }

    return arr.join("")
}

removeDigits("abc4")
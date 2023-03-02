const readline = require("readline")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback){
    if(numsLeft > 0) {
        const response = reader.question('number. NOW.', function (answer) {
            let num = parseInt(answer)
            
            sum += num
            console.log("Partial Sum:" + sum)
            addNumbers(sum, numsLeft - 1, completionCallback)
        })
    }

    if(numsLeft === 0) {
        completionCallback(sum)
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

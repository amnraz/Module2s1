function outerFunction( ){
    let message = "Hello!"
    function innerFunction(){
       console.log(message)
    }
    return innerFunction()
}

let result = outerFunction();
console.log(result)
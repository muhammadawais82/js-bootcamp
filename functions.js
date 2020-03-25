let user_g = function (){
    console.log("Welcome to functions")
}
user_g();

let square = function(num){
    let result = num * num
    return result
}
let value = square(4)
let newvalue = square(14)
console.log(value)
console.log(newvalue)

let convert_f_to_celcius = function (farnheight){
    let celcius = (farnheight - 32) * 5 / 9
    return celcius
}

let tempOne = convert_f_to_celcius(32)
let tempTwo = convert_f_to_celcius(54)

console.log(tempOne)
console.log(tempTwo)
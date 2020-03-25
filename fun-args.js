//passing arguments in functions
let add = function(a, b, c){
    return a + b + c
}

let result = add(23,54,23)
console.log(result)


let default_value = function(name = 'asad', score = 0){
    return 'Name = ' + name + '- Score = ' + score
}

let check_values = default_value('awais', 100)
console.log(check_values)
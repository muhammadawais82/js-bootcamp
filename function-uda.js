var catSays = function (max) {
    var catMsg = "";
    for (var i = 0; i < max;i++){
        catMsg += "meow";
    }
    return catMsg;
};
function helloCat(callbackFunc) {
    return "Hello "+callbackFunc(3);
}
helloCat(catSays);
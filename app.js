function palaindrome() {
    var userInput = document.getElementById("usertext").value
    var contcatStr = "";
    for (var i = userInput.length - 1; i >= 0; i--) {
        console.log(userInput[i])
        contcatStr += userInput[i]
    }
    console.log(contcatStr)
    if (userInput.toLowerCase() == contcatStr.toLowerCase()) {
        document.getElementById("paltext").innerText ="Yes this is " + userInput + " PALAINDROME";
    } else {
        document.getElementById("paltext").innerText = "NOT this is " + userInput + " PALAINDROME";

    }
}




























// function palaindrome(){
//     var userInput = document.getElementById("usertext").value;
// var str ="";
//     for(var i = userInput.length -1; i >= 0; i--){
//         console.log(userInput[i])
//         str += userInput[i]
//     }
//     if(userInput.toLowerCase() == str.toLowerCase()){
//         document.getElementById("paltext").innerText="palaindrome"
//     }else{
//         document.getElementById("paltext").innerText= "Not palaindrome"

//     }

// }
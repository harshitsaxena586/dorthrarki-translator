var button =   document.querySelector("#translateBtn")
var input = document.querySelector("#txt-input")
var output = document.querySelector("#output")
url="https://api.funtranslations.com/translate/dothraki.json"
// https://api.funtranslations.com/translate/dothraki.json
function likgenerator(text){
    return url+"?"+ "text="+ text;

}

function clickHandler(){
    var userInput=input.value
    fetch(likgenerator(userInput))
     .then(response=> response.json())
     .then(json=>  output.innerHTML=json.contents.translated)
     
}

button.addEventListener("click", clickHandler)
var button =   document.querySelector("#translateBtn")
var input = document.querySelector("#txt-input")
var output = document.querySelector("#output")

url="https://api.funtranslations.com/translate/dothraki.json"
function likgenerator(text){
    return url+"?"+ "text="+ text;

}
var temp =""
function clickHandler(){
    var userInput=input.value
    fetch(likgenerator(userInput))
     .then(response=> response.json())
     .then(json=>  temp=json.contents.translated)
            output.innerHTML= temp
     
}

button.addEventListener("click", clickHandler)


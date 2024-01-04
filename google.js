const btn = document.getElementsByClassName("HPVvwb");
const results = document.getElementById("result");
// function handleButtonClick() {
//     alert('SVG Clicked!');
// }
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

// recognition.onstart = function(){
// console.log("you can speek now");
// }

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    searchInput.value = text;
}

let searchbtn = document.querySelector('.searchbtn');

searchbtn.onclick = function () {
    let searchurl = "https://www.google.com/search?q=" + searchInput.value;
    window.open(searchurl);
}

//Get the elements and do store in a variable
var inputTextFieldElement = document.querySelector(".inputField");
var translateButton = document.querySelector("#btn-translate");
var outputTextFieldElement = document.querySelector(".outputField");

var url = "https://api.funtranslations.com/translate/minion.json";

function getWebUrl(text) {
  return url + "?" + "text=" + text;
}

// Handling the click on Translate button
translateButton.addEventListener("click", function () {
  var inputText = inputTextFieldElement.value;

  fetch(getWebUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var outputText = json.contents.translated;
      outputTextFieldElement.innerText = outputText;
    });
});

// Handling the key down event when pressed Enter Key
inputTextFieldElement.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    var inputText = inputTextFieldElement.value;

    fetch(getWebUrl(inputText))
      .then((response) => response.json())
      .then((json) => {
        var outputText = json.contents.translated;
        outputTextFieldElement.innerText = outputText;
      });
  }
});

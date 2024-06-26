let userInputEle = document.getElementById("userInput");
let factEle = document.getElementById("fact");

function displayFact(jsonText) {
    factEle.textContent = jsonText.fact;
}



function makeRequest(event) {
    if (event.key === "Enter") {
        let userRequest = userInputEle.value;

        if ((userRequest === "") || (typeof(parseInt(userRequest)) === typeof("String"))) {
            alert("Enter a number");
        } else {
            let urlText = "https://apis.ccbp.in/numbers-fact?number=" + userRequest;
            let options = {
                method: "GET"
            };
            fetch(urlText, options)
                .then(function(response) {
                    console.log("gisk");
                    return response.json();
                })
                .then(function(jsonText) {
                    displayFact(jsonText);
                });
        }
    }
}

userInputEle.addEventListener("keydown", makeRequest);
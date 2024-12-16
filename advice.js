const API_URL = "https://api.adviceslip.com/advice";
function get(url) {return fetch(url).then(resp => resp.json())}
const API = { get }

const quoteP = document.querySelector("h2#quote")

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']));
    
    var slipNumber = "Advice #" + Math.floor(Math.random() * 1234);
    document.getElementById("adviceSlip").innerHTML = slipNumber;
}

function addQuote(quote) {
    quoteP.innerText = '"' + quote + '"';
}

const reloadButton = document.querySelector("button#reload")
reloadButton.addEventListener("click", ()=> getQuotes())

document.body.onload = getQuotes;
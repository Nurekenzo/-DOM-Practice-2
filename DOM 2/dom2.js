document.getElementById("link").innerHTML="https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html"
document.getElementById("link").style.fontWeight = "bold";

var words = document.getElementById("text").innerHTML;
var counts = words.match(/(\w+)/g).length;
document.getElementById("count").innerHTML = counts;

let badText = document.getElementById("text").innerHTML;
let goodText = badText.replaceAll("?", "🤔");
let bestText = goodText.replaceAll("!", "😯");
document.getElementById("text").innerHTML = bestText;

function highlightWords() {
    const txt = document.getElementById("text").innerText;
    let output = "";
    let words1 = txt.split(" ");
    let size = 8;
    let replacementword = "";
    for (let i = 0; i < words1.length; i++) {
        let word2 = words1[i];
        if (word2.length >= 8) {
            replacementword = "<span class='lightext'>" + word2 + "</span>";
        }
        else {
            replacementword = word2;
        }
        output = output + " " + replacementword + " ";
    }

    return output;
}

document.getElementById("text").innerHTML = highlightWords();

const textInput = document.getElementById('textInput'); // obtaining the input element
const results = document.getElementById('results'); // obtaining the results div
const btn = document.getElementById('btn'); // obtaining the analyze button
// Creating the variables
let wordNum, charNum, sentenceNum, paraNum, ucNum, lcNum, spaceNum, digitNum, vowelNum, consoNum;

btn.addEventListener('click', analyzeText) // adding event listener for 'click' on button

function analyzeText() { // to show the result after click
    results.style.display = "grid";
    results.classList.add('moveUp');

        let values = giveResult();
        results.innerHTML = `
        <p>Words: ${values.wordNum}</p>
        <p>Characters: ${values.charNum}</p>
        <p>Sentences: ${values.sentenceNum}</p>
        <p>Paragraphs: ${values.paraNum}</p>
        <p>Uppercase: ${values.ucNum}</p>
        <p>Lowercase: ${values.lcNum}</p>
        <p>Spaces: ${values.spaceNum}</p>
        <p>Digits: ${values.digitNum}</p>
        <p>Vowels: ${values.vowelNum}</p>
        <p>Consonents: ${values.consoNum}</p>`

}

function giveResult() { // to analyze a return the values
    let inputText = textInput.value; // assigning value of textarea
    text = inputText.replace(/(^\s*)|(\s*$)/gi, ""); // removing all the space before & after the text
    text = inputText.replace(/[ ]{2,}/gi, " "); // removing all double spaces
    text = inputText.replace(/\n /, "\n"); // removing all spaces after a new line

    wordNum = text.split(" ").length; // obtaining the number of words
    charNum = text.length; // obtaining the number of characters
    sentenceNum = text.split(".").length - 1; // obtaining the number of sentences
    paraNum = text.split("\n").length; // obtaining the number of paragraphs

    // obtaining number of uppercase letters
    (text.match(/[A-Z]/g || []) != null) ? ucNum = text.match(/[A-Z]/g || []).length : ucNum = 0;
    // obtaining number of lowercase letter
    (text.match(/[a-z]/g || []) != null) ? lcNum = text.match(/[a-z]/g || []).length : lcNum = 0;
    // obtaining the number of spaces in the text
    (inputText.match(/[ ]/g || []) != null) ? spaceNum = inputText.match(/[ ]/g || []).length : spaceNum = 0;
    // obtaining the number of digits
    (text.match(/[0-9]/g || []) != null) ? digitNum = text.match(/[0-9]/g || []).length : digitNum = 0;
    // obtaining the number of vowels
    (text.match(/[aeiou]/g || []) != null) ? vowelNum = text.match(/[aeiou]/g || []).length : vowelNum = 0;
    // obtaining the number of consonents
    (text.match(/[a-z]/gi || []) != null) ? consoNum = text.match(/[a-z]/g || []).length - vowelNum : consoNum = 0;

    // returning the values
    return { wordNum, charNum, sentenceNum, paraNum, ucNum, lcNum, spaceNum, digitNum, vowelNum, consoNum };
}
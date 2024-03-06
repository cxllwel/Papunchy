var isRevealing = false; // Variable to track if text is being revealed

function showHiddenText() {
    if (!isRevealing) { // Check if text is not being revealed
        isRevealing = true; // Set to true to indicate text is being revealed
        var paragraph = document.getElementById("hidden-paragraph");
        paragraph.style.display = "block"; // Make the paragraph visible
        var text = paragraph.innerText;
        paragraph.innerText = "";
        revealText(text, paragraph);
    }
}

function revealText(text, element) {
    var index = 0;
    var interval = setInterval(function() {
        if (index < text.length) {
            if (text[index] === ' ') {
                element.innerHTML += '&nbsp;&nbsp;'; // Add multiple non-breaking spaces for visual spacing
            } else {
                element.innerText += text[index]; // Add the character
            }
            index++;
            // Scroll the document to the bottom
            document.documentElement.scrollTop = document.documentElement.scrollHeight;
            document.body.scrollTop = document.body.scrollHeight;
        } else {
            clearInterval(interval);
            isRevealing = false; // Set to false to indicate text reveal is complete
        }
    }, 115);
}

function showAnotherParagraph() {
    if (!isRevealing) { // Check if text is not being revealed
        var paragraph = document.getElementById("another-paragraph");
        paragraph.style.display = "block"; // Make the paragraph visible
        var text = paragraph.innerText;
        paragraph.innerText = ""; // Clear the paragraph text
        revealText(text, paragraph); // Call the function to reveal text gradually
    }
}

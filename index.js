

const text = "Hello, I’m Hakimo";
const typedTextSpan = document.getElementById("typed-text");
let index = 0;

function typeCharacter() {
  if (index < text.length) {
    typedTextSpan.textContent += text.charAt(index);
    index++;
    setTimeout(typeCharacter, 150);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeCharacter();
});



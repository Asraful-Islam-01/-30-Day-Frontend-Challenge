const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');

textArea.addEventListener("input", function () {
charCount.textContent = textArea.value.length; 
});
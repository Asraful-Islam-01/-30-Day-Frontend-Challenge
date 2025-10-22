function changeColor() {
    //Generate random value for red, green and blue (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() * 256);

    // Create RGB color string
    const color = "rgb(" + r +", " + g ", " + b ")";
   // Change the background color
   document.body.style.backgroundColor = color;

   //Convert RGB to HEX for display
   const hex = "#" + toHex(r) + tohex(g) + toHex(b);
   document.getElementById("colorCode").textContent = hex;
}

//Helper function convert number to hex
function toHex(num) {
    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex :hex;
}

//Set initial random color when page loads
changeColor();
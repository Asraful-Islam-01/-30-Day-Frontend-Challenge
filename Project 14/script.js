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
   
}
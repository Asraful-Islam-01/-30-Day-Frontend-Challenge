function updateClock() {
    const now = new date();

    //get time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //add leading zeros
    hours = hours < 10; ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Format time string with blinking clones
    const timeString = `${hours}<span class= "colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;

    //Update time display
    document.getElementById("time").innerHTML = timeString;
    // get date components
    const days = []
        
}


function updateclock() {
    const now =  new Date();

    //get time components 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now. getSeconds();

    //add leading zeros

    hours = hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes:minutes;
    seconds = seconds < 10 ? "0" + seconds:seconds;

    //Format time string with blinking colons
    const timeString = `${hours}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;
    
    // Update time display
    document.getElementById("time").innerHTML = timeString;

    // Get date components
    const days = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
    
    const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const  dayName = days[now.getDay()];
  const monthName = months[now.getMonth()]; 
  const date = now.getDate();
  const year = now.getFullYear();

  //Format date string
  const dateString = `${dayName}, ${monthName} ${date}, ${year}`
  // Update the display
  document.getElementedById("date").textContent = dateString;
};

//update clock immediately
updateclock();

//Update the clock every second
setInterval(updateclock, 1000);
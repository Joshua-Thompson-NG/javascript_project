// DIGITAL CLOCK

function updateClock(){
    // create date object to get time
    const now = new Date();

    // hours and determine AM or PM
    let hours = now.getHours().toString().padStart(2,'0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Format components
    const formattedHours = hours.toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');

    const timeString = `${hours}:${minutes}:${seconds}  ${ampm}`;

    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);
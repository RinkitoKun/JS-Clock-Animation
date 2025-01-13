const secondHand = document.querySelector(".sec_hand");
const minuteHand = document.querySelector(".min_hand");
const hourHand = document.querySelector(".hour_hand");

function setDate() {
    const current = new Date();
  
    const seconds = current.getSeconds();
    const minutes = current.getMinutes();
    const hours = current.getHours();
  
    const secondsDegree = (seconds / 60) * 360 - 90;
    const minutesDegree = (minutes / 60) * 360 - 90;
    const hourDegree = (hours % 12) / 12 * 360 + (minutes / 60) * 30 - 90;
  
    secondHand.style.transform = `rotate(${secondsDegree}deg) translate(-40px)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(`Seconds: ${seconds}, Minutes: ${minutes}, Hours: ${hours}`);
  }
  
  setInterval(setDate, 1000);

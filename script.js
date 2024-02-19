const currentDate = new Date();
console.log(currentDate);

const targetDate = new Date('2024-12-31T23:59:59');
console.log(targetDate);

const difference = targetDate - currentDate;
console.log(difference)

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

const interval = setInterval(updateCountdown, 1000);

if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
    }
    clearInterval(інтервал)
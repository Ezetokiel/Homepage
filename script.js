setInterval(() => {
    const time = document.querySelector(".time");
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    time.innerHTML = hours + ":" + minutes + ":" + seconds;
})

document.addEventListener("DOMContentLoaded", () => {
    const currentTime = document.getElementById("utc-time");
    const currentDay = document.getElementById("current-day");
    const hamBurger = document.getElementById("hamburger");
    const navBar = document.querySelector(".desktop-navbar");
    
    const dateTime = () => {
        const date = new Date();
        const time = date.toUTCString().split(' ')[4];
        const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
    
        currentTime.textContent = time;
        currentDay.textContent = dayOfWeek;
    }
    
    dateTime()
    setInterval(dateTime, 1000);

    hamBurger.addEventListener("click", () => {
        hamBurger.classList.toggle("open")
        navBar.classList.toggle("open")
    })
});

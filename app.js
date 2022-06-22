let calendar = document.getElementById("app-calendar");
let display;

for(i=0; i<31; i++){
    let semana = ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    if(i < 7){
        if (i == 0){
            calendar.innerHTML += `<div class="day"><span>${"Mon"}</span><span>${i}</span></div>`;
        }else{
            calendar.innerHTML += `<div class="day"><span>${semana[i]}</span><span>${i}</span></div>`;
        }
    }else{
        calendar.innerHTML += `<div class="day"><span>${i}</span></div>`;
    }   
}

let day = document.querySelectorAll(".day");
day.forEach(days => {
    days.addEventListener('click', evento => {
        console.log(evento.currentTarget.classList.toggle("selected"));
    })
});
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

function selectDay(){
    day.forEach(days => {
        days.addEventListener('click', evento => {
            let currentTarget =  evento.currentTarget.classList.toggle("selected");
            let selecionado = evento.currentTarget.classList.add('teste');
        })
    });
}
selectDay();
day.forEach(days=>{
    days.addEventListener('click', eventdb => {
        let comment = document.getElementById("main-comentario");
        comment.style.display = 'flex';
    });
});

function anotacao(){
    let textAnotacao = document.getElementById("text").value;
    let selecionado = document.querySelector(".teste");
    selecionado.innerHTML += `<span>${textAnotacao}</span>`;

    selecionado.classList.remove('teste')

    
    let comment = document.getElementById("main-comentario");
    comment.style.display = 'none';
}
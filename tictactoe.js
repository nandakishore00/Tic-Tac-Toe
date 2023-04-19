const btnLight = document.querySelector(".btn-light");
const center = document.querySelector(".center");
const start = document.querySelector(".start");
const starter = document.querySelector(".starter");

btnLight.addEventListener("click", function() {
    center.style.display = 'flex';
    start.style.display = 'none';
    starter.style.height = '0vh';
})
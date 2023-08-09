const months = document.querySelector('#months');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#mins');
const secs = document.querySelector('#secs');

const day = new Date();
days.textContent = day.getDate();

const month = new Date();
months.textContent = day.getMonth() + 1;

const hour = new Date();
hours.textContent = day.getHours();

const min = new Date();
mins.textContent = day.getMinutes();

setInterval(()=>{
    let sec = new Date();
    secs.textContent = day.getSeconds();
},1000);
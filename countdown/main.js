const months = document.querySelector('#months');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#mins');
const secs = document.querySelector('#secs');

const date = new Date();

days.textContent = date.getDate();
months.textContent = date.getMonth() + 1;
hours.textContent = date.getHours();
mins.textContent = date.getMinutes();

setInterval(()=>{
    let second = new Date();
    secs.textContent = second.getSeconds();
},1000);
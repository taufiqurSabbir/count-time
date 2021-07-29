const newy = prompt("Enter Date (Ex:1 january 2022)");
 const cu = new Date();

let dayE=document.getElementById('days');
let hoursE=document.getElementById('hours');
let minE=document.getElementById('min');
let secE=document.getElementById('sec');

 function count(){
    const newy2= new Date(newy);
    const cu = new Date();
    const totalsec= (newy2-cu)/1000;
    const days= Math.floor(totalsec/3600/24);
    const hours = Math.floor(totalsec/3600)%24;
    const min= Math.floor(totalsec/60)%60;
    const sec = Math.floor(totalsec)%60;
 
    dayE.innerHTML=ff(days)
    hoursE.innerHTML=ff(hours)
    minE.innerHTML=ff(min)
    secE.innerHTML=ff(sec)
    
 }

 function ff(time){
     return time <10 ? `0${time}` :time;
 }

 count();

 setInterval(count , 1000);


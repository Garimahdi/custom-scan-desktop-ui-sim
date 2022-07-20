// Get the current year
let getAnno = document.getElementById('anno');
let getDate = new Date().getFullYear();
console.log(getDate);
getAnno.innerHTML=String(getDate);

document.getElementById('button1').onClick=function(){
    location.href('https://google.com');
};
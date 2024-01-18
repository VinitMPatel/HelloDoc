const btn = document.getElementById("darkbtn");
const img = document.getElementById("darkimg");
var flag = 0;
btn.addEventListener('click', dark)

function dark(){
    if(flag==0){
        document.querySelector('body').setAttribute('data-bs-theme' , 'dark');
        flag=1;
        img.src = "images/dark_moon.png";
    }
    else{
        document.querySelector('body').setAttribute('data-bs-theme' , 'light');
        flag=0;
        img.src = "images/moon_light.png";
    }
}
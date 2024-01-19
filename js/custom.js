const btn1  = document.getElementById("upload");
const file = document.getElementById("filename");
// console.log(file);
// console.log("Hello");
btn1.addEventListener('change' , function(){
  file.textContent = this.files[0].name;
  file.style.fontSize = "large";
})
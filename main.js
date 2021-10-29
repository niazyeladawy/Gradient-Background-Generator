let leftInput = document.getElementById("left");
let rightInput = document.getElementById("right");
let body = document.querySelector("body");
let current = document.getElementById("current");
const styles = window.getComputedStyle(body);

current.innerHTML = styles.backgroundImage;
leftInput.addEventListener('input',function(){
    body.style.backgroundImage =`linear-gradient(to right ,${leftInput.value} ,${rightInput.value})`;
    current.innerHTML = styles.backgroundImage;
});

rightInput.addEventListener('input',function(){
    body.style.backgroundImage =`linear-gradient(to right ,${leftInput.value} ,${rightInput.value})`;
    current.innerHTML = styles.backgroundImage;
});


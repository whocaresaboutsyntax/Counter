let number=document.getElementsByClassName('number')[0];
let decreaseButton=document.getElementsByClassName('center')[0];
let resetButton=document.getElementsByClassName('center1')[0];
let increaseButton=document.getElementsByClassName('center2')[0];

decreaseButton.addEventListener('click',()=>{
    number.innerHTML= Number(number.innerHTML)-1;
    if(number.innerHTML!=0){
          number.style.color="green";
          }}
)
resetButton.addEventListener('click',()=>{
    number.innerHTML= 0;
    if(number.innerHTML==0){
        number.style.color= " rgba(7, 7, 56, 0.909)";}
})
increaseButton.addEventListener('click',()=>{
    number.innerHTML= Number(number.innerHTML)+1;
    if(number.innerHTML!=0){
          number.style.color="green";}
})

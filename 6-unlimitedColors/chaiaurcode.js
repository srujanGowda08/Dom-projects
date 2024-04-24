//generate a random color

const randomColor = ()=>{
    const hex ="0123456789ABCDEF";
    let color ='#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;

const changingColor= ()=>{
   if(!intervalId){
    intervalId = setInterval(change,100);
   }
    function change (){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopchangingColor= ()=>{
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',changingColor);

document.querySelector('#stop').addEventListener('click',stopchangingColor)
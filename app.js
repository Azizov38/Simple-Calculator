const displayScreen = document.querySelector('.display');

const display =(e)=>{
    displayScreen.value +=e;
}

const clearDisplay = ()=>{
    displayScreen.value = '';
}

const calculate = () =>{
    displayScreen.value = eval(displayScreen.value);
}
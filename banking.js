
function addAmount(inputType,errorField){
    let getInputValues = document.getElementById(inputType+'-value');
    let getInputValue = parseFloat(getInputValues.value)
    
    let errors = document.getElementById(errorField+'-error');
    if(getInputValues.value == ''){
        errors.style.display= 'block';
        errors.innerText = 'Empty input is not accepted !';
        
    }else if(isNaN(getInputValue)){
        errors.style.display= 'block';
        errors.innerText = 'Words are not accepted. Input only Number';  
    }else if(getInputValues.value<=0){
        errors.style.display= 'block';
        errors.innerText = 'Minus value is not accepted !';
    }else if(isNaN(getInputValue)!=true){
        errors.style.display= 'none';
    }


    // Clearing Input Field
    getInputValues.value = '';
}

document.getElementById('depositBtn').addEventListener('click',function(){
    addAmount('deposit', 'deposit');
})
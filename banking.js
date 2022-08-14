
function addAmount(inputType,errorField,showField){
    let getInputValues = document.getElementById(inputType+'-value');
    let getInputValue = parseFloat(getInputValues.value)

    let depositShows = document.getElementById(showField+'-show');
    let depositShow = parseFloat(depositShows.innerText);

    let balances = document.getElementById('balance');
    let balance = parseFloat(balances.innerText);
    
    // error message
    let errors = document.getElementById(errorField+'-error');

    //activity log
    let activity = document.getElementById('activity');
    let activityPara = document.createElement('li');
    activityPara.classList.add('fw-bold');

    if(getInputValues.value == ''){
        errors.style.display= 'block';
        errors.innerText = 'Empty input is not accepted !';
        
    }else if(isNaN(getInputValue)){
        errors.style.display= 'block';
        errors.innerText = 'Words are not accepted. Input only Number';  
    }else if(getInputValues.value<=0){
        errors.style.display= 'block';
        errors.innerText = 'Minus value or Zero is not accepted !';
    }else if(isNaN(getInputValue)!=true){
        errors.style.display= 'none';
        let depositBalance = depositShow + getInputValue;
        depositShows.innerText = depositBalance;

        if(inputType.toLowerCase()=='deposit'){
            let totalBalance = balance + getInputValue;
            balances.innerText = totalBalance;

            
            
            activityPara.innerText = 'You have Deposited $'+getInputValue;
            activityPara.style.color = '#0C62E2';
            activity.appendChild(activityPara);

        }else if(inputType.toLowerCase()=='withdraw'){
            if((balance-getInputValue)<=200){
                errors.style.display= 'block';
                errors.innerText = 'Withdraw Amount exceeded ! You cannot leave your account balance below $200';
            }else{
                errors.style.display= 'none';
                let totalBalance = balance - getInputValue;
                balances.innerText = totalBalance;

                activityPara.innerText = 'You have Withdrawed $'+getInputValue;
                activityPara.style.color = 'red';
                activity.appendChild(activityPara);
            
            }            
        }
    }


    // Clearing Input Field
    getInputValues.value = '';
}

document.getElementById('depositBtn').addEventListener('click',function(){
    addAmount('deposit', 'deposit', 'deposit');
})

document.getElementById('withdrawBtn').addEventListener('click',function(){
    addAmount('withdraw','withdraw','withdraw');
})
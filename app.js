

document.getElementById('submittBtn').addEventListener('click',function(){
    let names = document.getElementById('name');
    let name = names.value;
    let emails = document.getElementById('email');
    let email = emails.value; 

    let errorForName = document.getElementById('nameError');
    let errorForEmail = document.getElementById('emailError');
    
    if(name==''){
        errorForName.style.display = 'block';
        errorForName.innerText = 'You must type something !';
    }else if(isNaN(name) ==false){
        errorForName.style.display = 'block';
        errorForName.innerText = 'Numbers not allowed';
    }else if(name.toLowerCase() != 'rafayel'){
        errorForName.style.display = 'block';
        errorForName.innerText = 'Wrong Name';
    }else if(email==''){
        errorForName.style.display = 'none';
        errorForEmail.style.display = 'block';
        errorForEmail.innerText = 'Empty field not allowed ';
    }else if(isNaN(email) == false){
        errorForName.style.display = 'none';
        errorForEmail.style.display = 'block';
        errorForEmail.innerText = 'Number not allowed ';
    }else if(email != 'email@gmail.com'){
        errorForName.style.display = 'none';
        errorForEmail.style.display = 'block';
        errorForEmail.innerText = 'Invalid email ! ';;
    }
    else if(name=='rafayel' && email=='email@gmail.com'){
        window.location.href = 'banking.html';
    }

    // names.value= '';
})

document
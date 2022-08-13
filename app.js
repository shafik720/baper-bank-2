

document.getElementById('submittBtn').addEventListener('click',function(){
    let names = document.getElementById('name');
    let name = names.value;
    let emails = document.getElementById('email');
    let email = emails.value; 

    let errorForName = document.getElementById('nameError');
    
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
        
    }

    names.value= '';
})
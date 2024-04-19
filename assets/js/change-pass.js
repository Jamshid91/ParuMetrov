const current_pass = document.getElementById('current-pass'),
      new_pass = document.getElementById('new-pass'),
      conf_new_pass = document.getElementById('conf-new-pass'),
      incorrect_text = document.querySelector('.incorrect-text'),
      popUp_successfully = document.querySelector('.popUp-successfully'),
      changePass__btn = document.querySelector('.change-pass__btn');




// login in
changePass__btn.addEventListener('click', () => {
    changePassInput();
    let successNewPass = new_pass.parentElement.children[2].classList,
        successConfPass = conf_new_pass.parentElement.children[2].classList;
    
    if(successNewPass == 'success' && successConfPass == 'success') {
        // changePass__btn.type = 'submit'  
        setTimeout(() => {
            window.location.reload()
        }, 1000);


        popUp_successfully.classList.remove('d-none');
    }
    });

    function changePassInput() {
    const new_passValue = new_pass.value.trim(),
          conf_new_passValue = conf_new_pass.value.trim(),
          current_passValue = current_pass.value.trim();
    
    
   if(current_passValue === '' || current_passValue != '12345') {
        incorrect_text.textContent = '*Текущий пароль неверный'
        current_pass.focus();
        current_pass.parentElement.children[3].style.right = '50px'
        current_pass.parentElement.children[4].classList.remove('d-none');

    alert('Текущий пароль: 12345');
   } else {
        incorrect_text.textContent = ''

        current_pass.style.border = `1px solid #DFE3EA`;
        current_pass.parentElement.children[2].classList.add('success')
    
        current_pass.parentElement.children[3].style.right = '16px'
        current_pass.parentElement.children[4].classList.add('d-none');

        if(new_passValue === '' || conf_new_passValue === '' || new_passValue != conf_new_passValue) {
            incorrect_text.textContent = '*Введеные пароли не совпадают'
        
            new_pass.parentElement.children[3].style.right = '50px'
            new_pass.parentElement.children[4].classList.remove('d-none')
            
            conf_new_pass.parentElement.children[3].style.right = '50px'
            conf_new_pass.parentElement.children[4].classList.remove('d-none')
        
            
            new_pass.style.border = `1px solid #0048FF`;
            conf_new_pass.style.border = `1px solid #0048FF`;
           } 
           
           else {
            incorrect_text.textContent = ''
        
            new_pass.parentElement.children[2].classList.add('success')
            conf_new_pass.parentElement.children[2].classList.add('success')
        
            new_pass.parentElement.children[3].style.right = '16px'
            conf_new_pass.parentElement.children[3].style.right = '16px'
        
            new_pass.parentElement.children[4].classList.add('d-none')
            conf_new_pass.parentElement.children[4].classList.add('d-none')
            
            new_pass.style.border = `1px solid #DFE3EA`;
            conf_new_pass.style.border = `1px solid #DFE3EA`;
           }
   }
}



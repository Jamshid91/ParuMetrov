const showPass = document.querySelectorAll('.show_pass'),
      loginInBtn = document.querySelectorAll('.login-in__btn'),
      loginRegisBtn = document.querySelectorAll('.login-regis__btn'),
      popUpRegis = document.querySelector('.popUp-regis'),
      popUpLogin = document.querySelector('.popUp-login');



loginInBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    popUpLogin.classList.remove('d-none');
    popUpRegis.classList.add('d-none');
});
});

loginRegisBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    popUpLogin.classList.add('d-none');
    popUpRegis.classList.remove('d-none');
});
})



  const email_regis = document.getElementById('email-regis'),
        pass_regis = document.getElementById('pass-regis'),
        pass_repeat_regis = document.getElementById('pass-repeat-regis'),
        regis_btn = document.getElementById('regis-btn');


// Regis
regis_btn.addEventListener('click', () => {
checkInputsForm()
let successEmail = email_regis.parentElement.children[2].classList,
    successPass = pass_regis.parentElement.children[2].classList,
    successPassRepeat = pass_repeat_regis.parentElement.children[2].classList;

if(successEmail == 'success' && successPass == 'success' && successPassRepeat == 'success') {
    regis_btn.type = 'submit'  
    setTimeout(() => {
        window.location.reload()
    }, 1000);
}
});

function checkInputsForm() {
const regis_emailValue = email_regis.value.trim(),
      regis_passValue = pass_regis.value.trim(),
      regis_passRepeatValue = pass_repeat_regis.value.trim();


if(regis_emailValue === '') {
  setErrorFor(email_regis, '1px solid #E47169')
}
else if(!isEmail(regis_emailValue)) {
  setErrorFor(email_regis, '1px solid #E47169')
}
 else {
  setSuccesFor(email_regis)
  email_regis.parentElement.children[2].classList.add('success')
}

if(regis_passValue === '') {
  setErrorFor(pass_regis, '1px solid #E47169')
} else {
  setSuccesFor(pass_regis)
  pass_regis.parentElement.children[2].classList.add('success')
}

if(regis_passRepeatValue === '' || regis_passRepeatValue != regis_passValue) {
    setErrorFor(pass_repeat_regis, '1px solid #E47169')
  } else {
    setSuccesFor(pass_repeat_regis)
    pass_repeat_regis.parentElement.children[2].classList.add('success')
  }
}

const email_login = document.getElementById('email-login'),
      pass_login = document.getElementById('pass-login'),
      login_btn = document.getElementById('login-btn');

// login in
login_btn.addEventListener('click', () => {
    checkInputsFormLogin()
    let successEmailLogin = email_login.parentElement.children[2].classList,
        successPassLogin = pass_login.parentElement.children[2].classList;
    
    if(successEmailLogin == 'success' && successPassLogin == 'success') {
        login_btn.type = 'submit'  
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
    });

    function checkInputsFormLogin() {
    const login_emailValue = email_login.value.trim(),
          login_passValue = pass_login.value.trim();
    
    
    if(login_emailValue === '') {
      setErrorFor(email_login, '1px solid #E47169')
    }
    else if(!isEmail(login_emailValue)) {
      setErrorFor(email_login, '1px solid #E47169')
    }
     else {
      setSuccesFor(email_login)
      email_login.parentElement.children[2].classList.add('success')
    }
    
    if(login_passValue === '') {
      setErrorFor(pass_login, '1px solid #E47169')
    } else {
      setSuccesFor(pass_login)
      pass_login.parentElement.children[2].classList.add('success')
    }
}



function setErrorFor(input, border) {
input.style.border = border
}

function setSuccesFor(input) {
input.style.border = `1px solid #0048FF`;
} 

function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// view password
showPass.forEach(show => {
    show.addEventListener('click', () => {
      let elem = show.parentElement.children[1];
      if(elem.type === 'password') {
        elem.type = 'text';
        show.classList.add('showPass')
      } else {
        elem.type = 'password';
        show.classList.remove('showPass')
      }
    });
  });
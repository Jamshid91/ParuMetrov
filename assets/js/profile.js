const userList = document.querySelector('.active-user-list');

userList.addEventListener('click', () => {
    userList.parentElement.classList.toggle('showProfile')
});


const exitBtns = document.querySelectorAll('.exit-btn');
const popUpExit = document.querySelector('.popUp-exit');

exitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpExit.classList.remove('d-none')
    })
});
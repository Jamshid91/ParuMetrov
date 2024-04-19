const changeBtns = document.querySelectorAll('.input-box .change'),
      saveBtn = document.querySelector('.change-save'),
      popUp_changesSaved = document.querySelector('.popUp-changesSaved');


changeBtns.forEach(change => {
    change.addEventListener('click', () => {
        let inp = change.parentElement.children[1]
        inp.disabled = false;
        inp.focus()
        change.classList.add('d-none');
        saveBtn.classList.remove('d-none')
    });
});

saveBtn.addEventListener('click', () => {
    popUp_changesSaved.classList.remove('d-none')
});
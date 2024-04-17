const checking = document.querySelector('.checking');
const scrolling = document.querySelector('.scrolling');

window.addEventListener('scroll', () => { 
    const position = checking.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 2;

    if(screenPosition > position) {
        scrolling.classList.add('streachUp')
      } else {
        scrolling.classList.remove('streachUp')
      }
})
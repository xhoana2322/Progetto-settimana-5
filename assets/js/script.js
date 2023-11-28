document.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    let button = document.querySelector('header > button ');

    if (window.scrollY > 300) {
        header.classList.add('scrolled')
        button.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
        button.classList.remove('scrolled')
    }
});

// document.addEventListener('scroll', () => {
//     let button = document.querySelector('header > button ');

//     if (window.scrollY > 300) {
//         button.classList.add('scrolled')
//     } else {
//         button.classList.remove('scrolled')
//     }
// });
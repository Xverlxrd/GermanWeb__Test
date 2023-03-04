document.querySelector('.drop__btn').addEventListener('click', e => {
    let button = document.querySelector('.drop__btn');
    let dropdown = document.querySelector('.header__dropdown');
    switch(dropdown.style.display){
        case 'none':
            dropdown.style.display = 'flex';
            button.src = '../img/close.png'
            break;
        default:
            dropdown.style.display = 'none';
            button.src = '../img/burger__menu.png'
    }

})
anime({
    targets: '.circulo',
    keyframes: [
        {translateX: 0},
        {translateY: -30},
        {translateX: 150},
        {translateY: 30},
        {translateX: 0},
        {translateY: 0}
    ],
    duration: 5000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});
anime({
    targets: '.circulo2',
    keyframes: [
        {translateX: 0},
        {translateY: 30},
        {translateX: -150},
        {translateY: -30},
        {translateX: 0},
        {translateY: 0}
    ],
    duration: 5000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});

document.addEventListener('click', ()=>{
    console.log(event.clientX);
    console.log(event.clientY);
});

$(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('.demostracion').fadeOut('slow', function () {
            });
        },2000); // set the time here
    });  
});

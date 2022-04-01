const btt = $('#back-to-top');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btt.addClass('visible');
    } else {
        btt.removeClass('visible')
    }
})
btt.click(function(e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 500);
})

// 메인슬라이드
const slide = document.querySelector('.slide');
const bar = document.querySelectorAll('.bar');

window.onload = function() {
    let i = 0;
    setInterval(function() {
        for (let j = 0; j < 5; j++) {
            bar[j].classList.remove('barColor');
        }
        slide.style.transition = `2s`;
        slide.style.transform = `translate3d(-${1903*i}px, 0px, 0px)`;
        i++

        bar[i - 1].classList.add('barColor');


        if (i === 5) {
            i = 0;
        }
    }, 4000)
}

//light-box
/* menu list btn */
$('#nav').mouseover(function() {
    $('#nav').addClass('action');
    $('.no_touch').css('display', 'block');
});
$('#nav').mouseout(function() {
    $('#nav').removeClass('action');
    $('.no_touch').css('display', 'none');
});
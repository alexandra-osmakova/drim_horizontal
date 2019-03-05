var ourWorkSlider = document.getElementsByClassName('our_works_content')[0];
var ourWorkSliderPages = document.getElementsByClassName('our_works_content_item');
var sliderCounter = 0;

ourWorkSlider.addEventListener('click', function(event) {
    var target = event.target;
    if(target.classList.contains('our_works_content_control')) {
        changeSlide()
    }
})

function changeSlide() {
    if(sliderCounter < ourWorkSliderPages.length-1) {
        sliderCounter++;
        for(var i = 0; i < ourWorkSliderPages.length; i++) {
            ourWorkSliderPages[i].classList.add('invisible_item');
        }
        ourWorkSliderPages[sliderCounter].classList.remove('invisible_item');
        ourWorkSliderPages[sliderCounter].classList.add('slider_anumation');
        removeAnimation()
    }
    else if(sliderCounter == ourWorkSliderPages.length-1) {
        console.log(1)
        sliderCounter = 0;
        for(var i = 0; i < ourWorkSliderPages.length; i++) {
            ourWorkSliderPages[i].classList.add('invisible_item');
        }
        ourWorkSliderPages[sliderCounter].classList.remove('invisible_item');
        ourWorkSliderPages[sliderCounter].classList.add('slider_anumation');
        removeAnimation()
    }
}

function removeAnimation() {
    var timerId = setInterval(function () {
        for (var i = 0; i < ourWorkSliderPages.length; i++) {
            ourWorkSliderPages[i].classList.remove('slider_anumation');
        }
    }, 300);

    setTimeout(function () {
        clearInterval(timerId);
    }, 350);
}
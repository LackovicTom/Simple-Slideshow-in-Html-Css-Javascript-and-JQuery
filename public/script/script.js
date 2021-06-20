$(document).ready(function () {
    /* Init Slideshow */
    initSlideshow();
    /* Next Slide every 5sec */
    slideShowTimer = setInterval(nextSlide, 5000);
});

/**************************/
/* Slideshow */
/**************************/
var  itemCount = 0;
var atDot = 0;
/* For Global Timer */
var slideShowTimer;

function initSlideshow(){
    /* Count Number of Item in slideshow */
    itemCount = $('.item').length;
    
    /* Add dot to DOM */
    for (i=0; i<itemCount; i++){
        $('#dotsContainer').append('<div id="dot'+i+'" class="dot" onclick="dotClick(this)"></div>');
    }
    $('#dot0').addClass('dotActive');
}

function nextSlide(){
    var previousItem = $('.item.sliderActive');
    var nextItem = $('.item.sliderActive').next();
    previousItem.removeClass('sliderActive');
    nextItem.addClass('sliderActive');
    atDot++;
    if($('.item.sliderActive').length == 0){
        $('.item').first().addClass('sliderActive');
        atDot = 0;
    }
    dotChange();
    /* Reset Timer */
    slideShowTimerReset();
}

function prevSlide(){
    var currentItem = $('.item.sliderActive');
    var previousItem = $('.item.sliderActive').prev();
    currentItem.removeClass('sliderActive');
    previousItem.addClass('sliderActive');
    atDot--;
    if($('.item.sliderActive').length == 0){
        $('.item').last().addClass('sliderActive');
        atDot = itemCount-1;
    }
    dotChange();
    /* Reset Timer */
    slideShowTimerReset();
}


function dotChange(){
    var prevDot = $('.dotActive');
    var newDot = $('#dot'+atDot);
    prevDot.removeClass('dotActive');
    newDot.addClass('dotActive');
}

function dotClick(dotClicked){
    var idOfDotClicked = $(dotClicked).attr('id').replace(/dot/, '');
    atDot = idOfDotClicked;
    dotChange();
    var oldActiveItem = $('.item.sliderActive');
    var newActiveItem = $('.item').eq(idOfDotClicked);
    oldActiveItem.removeClass('sliderActive');
    newActiveItem.addClass('sliderActive');
    /* Reset Timer */
    slideShowTimerReset();
}

function slideShowTimerReset(){
    /* Reset Timer */
    clearInterval(slideShowTimer);
    slideShowTimer = setInterval(nextSlide, 5000);
}
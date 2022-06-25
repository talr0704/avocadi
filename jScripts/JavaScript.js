var firstSlide = 1;
showSlides(firstSlide);


function plusSlides(n) {
    showSlides(firstSlide += n);
}


function currentSlide(n) {
    showSlides(firstSlide = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var mini = document.getElementsByClassName("mini");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        firstSlide = 1
    }
    if (n < 1) {
        firstSlide = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < mini.length; i++) {
        mini[i].className = mini[i].className.replace(" active", "");
    }
    slides[firstSlide - 1].style.display = "block";
    mini[firstSlide - 1].className += " active";
    captionText.innerHTML = mini[firstSlide - 1].alt;
    console.log(mini.length);
    console.log(slides.length);

}
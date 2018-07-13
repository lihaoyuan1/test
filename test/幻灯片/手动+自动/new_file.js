var slideIndex = 0;
showSlides(slideIndex);
showSlides1();

function plusSlides(n){
	slideIndex += n;
	showSlides(slideIndex);
}
function currentSlide(n){
	slideIndex = n;
	showSlides(slideIndex);
}
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if(n == slides.length)
		slideIndex = 0;
	if(n < 0)
		slideIndex = slides.length-1;
	for(i=0; i<slides.length; i++)
		slides[i].style.display = "none";
	for(i=0; i<dots.length; i++)
		dots[i].classList.remove("active");
	slides[slideIndex].style.display = "block";
	dots[slideIndex].classList.add("active");
}
function showSlides1(){
	var i = slideIndex;
	slideIndex = (slideIndex+1)%3;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	slides[i].style.display = "block";
	dots[i].classList.add("active");
	setTimeout(function(){
		slides[i].style.display = "none";
		dots[i].classList.remove("active");
		showSlides1();
	},3000);
}

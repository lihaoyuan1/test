var slideIndex = 0;
showSlides();

function showSlides(){
	var i = slideIndex;
	slideIndex = (slideIndex+1)%3;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	slides[i].style.display = "block";
	dots[i].classList.add("active");
	setTimeout(function(){
		slides[i].style.display = "none";
		dots[i].classList.remove("active");
		showSlides();
	},3000);
}
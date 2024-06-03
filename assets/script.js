const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let banner = document.getElementById( "banner")
let img = document.createElement("img")
const leftArrowClick = document.querySelector("#banner .arrow_left")
let i = 0
let titleSlider = document.querySelector("#banner p")


leftArrowClick.addEventListener("click", function(){
	if ( i <= 3 && slides[i] !== slides[0]) {
		i--
		console.log(i)
		img.src = slides[i].image
		img.classList.add("banner-img")
		banner.appendChild(img)
		let newTextSlider = `${slides[i].tagLine}`
		titleSlider.innerHTML = newTextSlider
		console.log(slides[i])
		spanSelect[i].classList.toggle("dot_selected")
		console.log(spanSelect)
		spanSelect[i+1].classList.toggle("dot_selected")
		console.log(spanSelect)
		
	} else {
		i= 3
		console.log(i)
		img.src = slides[i].image
		img.classList.add("banner-img")
		banner.appendChild(img)
		let newTextSlider = `${slides[i].tagLine}`
		titleSlider.innerHTML = newTextSlider
		spanSelect[i].classList.toggle("dot_selected")
		spanSelect[0].classList.toggle("dot_selected")
	}
})
const rightArrowClick = document.querySelector("#banner .arrow_right")
console.log(rightArrowClick)



rightArrowClick.addEventListener("click", function(){
	if ( i <= 3 && slides[i] !== slides[3]) {
		i++
		console.log(i)
		img.src = slides[i].image
		img.classList.add("banner-img")
		banner.appendChild(img)
		let newTextSlider = `${slides[i].tagLine}`
		titleSlider.innerHTML = newTextSlider
		spanSelect[i].classList.toggle("dot_selected")
		console.log(spanSelect)
		spanSelect[i-1].classList.toggle("dot_selected")
		console.log(spanSelect)
		console.log(slides[i])
		
	} else {
		i= 0
		console.log(i)
		img.src = slides[i].image
		img.classList.add("banner-img")
		banner.appendChild(img)
		let newTextSlider = `${slides[i].tagLine}`
		titleSlider.innerHTML = newTextSlider
		spanSelect[i].classList.toggle("dot_selected")
		spanSelect[3].classList.toggle("dot_selected")
	}
})


function dots (){
	let dotSpan = document.querySelector("#banner .dots")
	for (let i=0; i < slides.length; i++){
		let span = document.createElement("span")
		span.classList.add("dot")
		dotSpan.appendChild(span)
	}
}
dots()



// faire la boucle avec tous les éléments

// img.src = slides[0].image
// img.classList.add("banner-img")
// banner.appendChild(img)



// console.log(titleSlider)






//


// gérer les points

let spanSelect = document.querySelectorAll("#banner .dots span")
console.log(spanSelect[0].classList.toggle("dot_selected"))
// console.log(spanSelect[0].classList.toggle("dot_selected"),spanSelect[1].classList.toggle("dot_selected"))
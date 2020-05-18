const galleryContainer = document.querySelector('.gallery-container');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.fa-times');
let currentSelection;
let galleryHTML = '';

for (let i = 0; i < gallery.length; i++) {
	galleryHTML += `<img src="${gallery[i].thumb}">`
}
galleryContainer.innerHTML = galleryHTML;


galleryContainer.addEventListener('click', (e) => {
	let img = galleryContainer.querySelectorAll('img');
	for (let i = 0; i < img.length; i++) {
		if (e.target === img[i]) {
			overlay.classList.add('show-overlay');
		}
	}
});
overlay.addEventListener('click', function (e) {
	if (e.target === this) {
		this.classList.remove('show-overlay');
	}
	if (e.target === close) {
		this.classList.remove('show-overlay');
	}
	if (e.target === imgContainer) {
		this.classList.remove('show-overlay');
	}
});

const imgContainer = document.querySelector('.image-container');
galleryContainer.addEventListener('click', (e) => {
	let img = galleryContainer.querySelectorAll('img');
	for (let i = 0; i < img.length; i++) {
		if (e.target === img[i]) {
			currentSelection = i;
			checkIndex();
			imgContainer.innerHTML = `<img class="full-image" src="${gallery[i].fullsize}">`
		}
	}
	let fullSizeImage = document.querySelector('.full-image');
	window.setTimeout(function () {
		fullSizeImage.classList.add('largeSize');
	}, 200)
});


const leftArrow = document.querySelector('.fa-arrow-left');
const rightArrow = document.querySelector('.fa-arrow-right');

leftArrow.addEventListener('click', () => {
	currentSelection -= 1;
	imgContainer.innerHTML = `<img class="full-image-filter" src="${gallery[currentSelection].fullsize}">`
	window.setTimeout(function () {
		let fullSizeImage = document.querySelector('.full-image-filter');
		fullSizeImage.classList.add('largeSize');
		fullSizeImage.style.animation = 'fadeInLeft .7s forwards ease-in-out';
	}, 200)
	checkIndex();
});
rightArrow.addEventListener('click', () => {
	currentSelection += 1;
	imgContainer.innerHTML = `<img class="full-image-filter" src="${gallery[currentSelection].fullsize}">`
	window.setTimeout(function () {
		let fullSizeImage = document.querySelector('.full-image-filter');
		fullSizeImage.classList.add('largeSize');
		fullSizeImage.style.animation = 'fadeInRight .7s forwards ease-in-out'
	}, 200)
	checkIndex();
});

function checkIndex() {
	if (currentSelection === gallery.length - 1) {
		rightArrow.classList.add('disabledArrow');
	} else {
		rightArrow.classList.remove('disabledArrow');
	}
	if (currentSelection === 0) {
		leftArrow.classList.add('disabledArrow');
	} else {
		leftArrow.classList.remove("disabledArrow");
	}
}


const search = document.querySelector('.image-search');
search.addEventListener('keyup', () => {
	let query = search.value.toLowerCase();
	const images = document.querySelectorAll('.gallery-container img');
	images.forEach((image, index) => {
		if (gallery[index].tags.includes(query)) {
			images[index].style.display = 'block';
		} else {
			images[index].style.display = 'none'
		}
	});
});
console.log("hello world");

let imageGrab = document.querySelector('img');

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been successfully submitted');
}

const imageAlert = () => {
	alert('Thanks for looking at my Hulk Duck');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

imageGrab.addEventListener('mouseover', imageAlert)
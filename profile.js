// step 1: Grab html function

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

// step 2: create functions

let faveColorAlert = () => {
    alert('Green is my favorite color!');
}

let favePlaceAlert = () => {
    alert('The Madison River Valley in Montana is my favorite place!');
}

let faveRitualAlert = () => {
    alert('I love going on runs!')
}
// step 3: use event listners

colorBtn.addEventListener('click', faveColorAlert)
placeBtn.addEventListener('click', favePlaceAlert)
ritualBtn.addEventListener('click', faveRitualAlert)
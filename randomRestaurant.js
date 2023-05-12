restBtn = document.querySelector("#random-restaurant")

let randomResGenerator = () => {
    let restaurantList = ['Mastra Italian Restaurant', 'Block Restaurant', 'Black Sheep Cafe', 'Communal', 'Oteo']

    const randomRestaurant = restaurantList[Math.floor(Math.random() * restaurantList.length)];

    alert(`I'd reccomend you try ${randomRestaurant}`)

}

restBtn.addEventListener('click', randomResGenerator)
fetch('/data/DATA.json')
  .then(response => response.json())
  .then(data => {

    const restaurantList = document.getElementById('restaurantList');

    for(const restaurant of data.restaurants){
        const restaurantDiv = document.createElement('div');
        restaurantDiv.tabIndex = 0;
        restaurantDiv.innerHTML = `
            <h3>${restaurant.name}</h3>
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
            <h4>City: ${restaurant.city}</h4>
            <h4>Rating: ${restaurant.rating}</h4>
            <p>Description: ${restaurant.description}</p>
       
        `;
        restaurantList.appendChild(restaurantDiv);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


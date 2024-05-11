import CONFIG from "../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="resto-name"><h1>${restaurant.name}</h1></div>
    <div class="restaurant-info">
        <img src="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" alt="${restaurant.name}">
        <h2>Kota: ${restaurant.city}</h2>
        <h3>Rating: ⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></h3>
        <h4>Deskripsi Resto:</h4> 
        <p>${restaurant.description}</p>
        <h3>${restaurant.address}</h3>
    </div>
    <div class="menu">
        <h2>Menu Makanan dan Minuman</h2>
        <div class="menus-container">
            <div class="menu-food">
                <h3>Makanan</h3>
                <ul>
                    <li>${restaurant.menus.foods[0].name}</li>
                    <li>${restaurant.menus.foods[1].name}</li>
                    <li>${restaurant.menus.foods[2].name}</li>
                </ul>
            </div>
            <div class="menu-drink">
                <h3>Minuman</h3>
                <ul>
                    <li>${restaurant.menus.drinks[0].name}</li>
                    <li>${restaurant.menus.drinks[1].name}</li>
                    <li>${restaurant.menus.drinks[2].name}</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="review-container">
        <h2>Ulasan Pelanggan</h2>
            ${restaurant.customerReviews.map((review) => `
            <div class="review">
                <h4>${review.name}</h4>
                <p>${review.review}</p>
                <p>${review.date}</p>
            </div>
            `
            )}
    </div>

`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="resto-item">
    <div class="resto-item__header">
    <img class="resto-item__header__poster" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_MEDIUM + restaurant.pictureId}">
    <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
    </div>
    </div>
    <div class="resto-item__content">
    <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
</div>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
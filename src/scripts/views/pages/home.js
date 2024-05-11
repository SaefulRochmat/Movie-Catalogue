import RestaurantDbSource from "../../../public/data/restaurantdb-source";
import { createRestaurantItemTemplate } from "../template-creator";

const Home = {
    async render() {
        return `
        <div class="hero" id="maincontent" tabindex="0">
            <img src="./images/heros/hero-image_2.jpg" alt="Kumpulan Orang Sedang Makan" />
        </div>


        <div class="content">
            <h2 class="content__heading">Explore Restaurant</h2>
            <div id="resto" class="resto">
            </div>
        </div>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.listRestaurants();
        const resturantContainer = document.querySelector('#resto');
        restaurants.forEach((resto) => {
            resturantContainer.innerHTML += createRestaurantItemTemplate(resto);
        });
    },
};

export default Home;
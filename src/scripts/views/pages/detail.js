import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../../public/data/restaurantdb-source";
import { createRestaurantDetailTemplate } from "../template-creator";

const Detail = {
    async render() {
        return `
        <div class="hero" id="maincontent" tabindex="0">
            <img src="./images/heros/hero-image_2.jpg" alt="Kumpulan Orang Sedang Makan" />
        </div>

        <h2>Explore Restaurant</h2>

        <div id="resto" class="detail-resto"></div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestaurantDbSource.detailRestaurant(url.id);
        const restoContainer = document.querySelector('#resto');
        restoContainer.innerHTML = createRestaurantDetailTemplate(resto);
    },
};

export default Detail;
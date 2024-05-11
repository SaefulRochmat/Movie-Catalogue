import API_ENDPOINT from "../../scripts/globals/api-endpoint";

class RestaurantDbSource {
    static async listRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
        const responseJson = await response.json();
        return responseJson.restaurants;

    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }
}

export default RestaurantDbSource;
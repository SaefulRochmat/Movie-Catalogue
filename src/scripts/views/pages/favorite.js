const Favorite = {
    async render() {
        return `
        <div class="hero" id="maincontent" tabindex="0">
            <img src="./images/heros/hero-image_2.jpg" alt="Kumpulan Orang Sedang Makan" />
        </div>

        <h2>Explore Restaurant</h2>
    `;
    },

    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
};

export default Favorite;
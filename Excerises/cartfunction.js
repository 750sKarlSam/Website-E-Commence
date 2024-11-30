let dogsite = new Vue({
    el: '#dogsite',
    data: {
        sitename: "Dogs For Me",
        product: {
            id: 1,
            title: "Rottweiler, 2 weeks, male",
            description: "Rottweiler one of the most <em>popular</em> yet <em>strong</em> dogs.",
            price: 1000,
            image: ""
        },
        cart: []
    },
    methods: {
        addItemToCart: function() {
            this.cart.push(this.product.id);
        }
    }
});

//     },
//     methods: {
//         fetchBreeds() {
//             axios.get('https://dog.ceo/api/breeds/list/all')
//                .then(response => {
//                     this.breeds = Object.keys(response.data.message);
//                     this.loading = false;
//                 })
//                .catch(error => {
//                     console.error(error);
//                     this.loading = false;
//                 });
//         },
//         fetchBreedDetails(breed) {
//             this.loading = true;
//             axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
//                .then(response => {
//                     this.breedDetails = response.data;
//                     this.loading = false;
//                 })
//                .catch(error => {
//                     console
// }

submitForm() {alert('Order submitted!')}
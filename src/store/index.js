import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [{
                id: 1,
                name: "Ali Bangash",
                email: "alibangash@gmail.com",
                nickname: "Ali",
                bdate: "25-01-1998",
                gender: "Male",
            },
            {
                id: 2,
                name: "Sohail Younas",
                email: "sohailyounas@gmail.com",
                nickname: "Sohail",
                bdate: "27-11-1984",
                gender: "Male",
            },
            {
                id: 3,
                name: "Hibba Khan",
                email: "hibbakhan@gmail.com",
                nickname: "Hibba",
                bdate: "14-12-1987",
                gender: "Female",
            },
            {
                id: 4,
                name: "Hamza khan",
                email: "hamzakhan@gmail.com",
                nickname: "Hamza",
                bdate: "31-12-1990",
                gender: "Male",
            },
            {
                id: 5,
                name: "Shafaq Rahman",
                email: "shafaqrahman@gmail.com",
                nickname: "Shafaq",
                bdate: "30-03-1999",
                gender: "Female",
            },
            {
                id: 6,
                name: "Musa Afridi",
                email: "musaafridi@gmail.com",
                nickname: "Musa",
                bdate: "17-06-1986",
                gender: "Male",
            },
            {
                id: 7,
                name: "Syed Zeeshan",
                email: "zeeshankazmi@gmail.com",
                nickname: "Zeeshan",
                bdate: "27-01-2001",
                gender: "Male",
            },
            {
                id: 8,
                name: "Asad Dar",
                email: "asaddar@gmail.com",
                nickname: "Asad",
                bdate: "19-05-1987",
                gender: "Male",
            },
            {
                id: 9,
                name: "Farwa Aslam",
                email: "farwaaslam@gmail.com",
                nickname: "Farwa",
                bdate: "12-01-1986",
                gender: "Female",
            },
            {
                id: 10,
                name: "Ismail Atlas",
                email: "ismailatlas@gmail.com",
                nickname: "Ismail",
                bdate: "09-01-1990",
                gender: "Male",
            },
            {
                id: 11,
                name: "Sana Khan",
                email: "sanakhan@gmail.com",
                nickname: "Sana",
                bdate: "02-08-2000",
                gender: "Female",
            },
            {
                id: 12,
                name: "Maria Khan",
                email: "mariakhan@gmail.com",
                nickname: "Maria",
                bdate: "10-02-1995",
                gender: "Female",
            },
        ],
    },
    getters: {
        fetchAllProducts(state) {
            return state.products;
        },
        getProductById: (state) => (id) => {
            return state.products.find((product) => {
                if (product.id === Math.floor(id)) {
                    return true;
                }
            });
        },
    },
    mutations: {
        ADD_PRODUCT(state, payload) {
            state.products = payload;
        },
        DELETE_PRODUCT(state, payload) {
            state.products = payload;
        },
    },
    actions: {
        addProduct({ state, getters, commit }, payload) {
            let products = state.products;
            products.push(payload);
            commit("ADD_PRODUCT", products);
        },
        updateProduct({ state, getters, commit }, payload) {
            const currentProduct = state.products.find((product) => {
                if (product.id === Math.floor(payload.id)) {
                    return true;
                }
            });
            currentProduct.name = payload.name;
            currentProduct.email = payload.email;
            currentProduct.nickname = payload.nickname;
            currentProduct.bdate = payload.bdate;
            currentProduct.gender = payload.gender;
        },
        deleteProduct({ state, getters, commit }, payload) {
            var filtered = state.products.filter(function(el) {
                return el.id != payload;
            });
            commit("DELETE_PRODUCT", filtered);
        },
    },
});
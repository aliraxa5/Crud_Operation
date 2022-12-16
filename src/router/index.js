import Vue from 'vue'
import VueRouter from 'vue-router'
import ListProduct from '../components/ListProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
import DeleteProduct from '../components/DeleteProduct.vue'
import Product from '../components/Product.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: "/", 
    component: ListProduct,
    name: "ListProduct" 
  },
  { 
    path: "/product/:product_id", 
    component: Product, 
    name: "product" 
  },
  { 
    path: "/add-product", 
    component: AddProduct,
    name: "AddProduct" 
  },
  {
    path: "/product/:product_id/edit",
    component: EditProduct,
    name: "product-edit"
  },
  {
    path: "/product/:product_id/delete",
    component: DeleteProduct,
    name: "product-delete"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

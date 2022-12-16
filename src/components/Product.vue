<template id="product-list">
  <div>
    <router-link class="button" :to="{ name: 'AddProduct' }">
      <span class="addproduct">Add product</span>
    </router-link>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Nickname</th>
          <th>Birthdate</th>
          <th>Gender</th>
          <th class="col-sm-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>
            <router-link
              v-bind:to="{
                name: 'product',
                params: { product_id: product.id },
              }"
              >{{ product.name }}</router-link
            >
          </td>
          <td class="userdetail">{{ product.email }}</td>
          <td class="userdetail">
            {{ product.nickname }}
          </td>
          <td class="userdetail">
            {{ product.bdate }}
          </td>
          <td class="userdetail">
            <span class="usergender">
              <img
                v-if="product.gender == 'Male'"
                src="../assets/male.svg"
                alt="male"
                class="male-svg"
              />
              <img
                v-else
                src="../assets/female.svg"
                alt="female"
                class="female-svg"
              />
              {{ product.gender }}
            </span>
          </td>
          <td class="py-1">
            <div class="buttons">
              <router-link
                class="button is-warning is-small"
                v-bind:to="{
                  name: 'product-edit',
                  params: { product_id: product.id },
                }"
                >Edit
              </router-link>
              <router-link
                class="button is-danger is-small"
                v-bind:to="{
                  name: 'product-delete',
                  params: { product_id: product.id },
                }"
              >
                Delete
              </router-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  data() {
    return {
      searchKey: "",
    };
  },
  computed: {
    ...mapGetters(["fetchAllProducts"]),
    products() {
      return this.fetchAllProducts;
    },
    filteredProducts() {
      return this.products.filter(function (product) {
        return (
          this.searchKey == "" ||
          product.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !==
            -1 ||
          product.description
            .toLowerCase()
            .indexOf(this.searchKey.toLowerCase()) !== -1
        );
      }, this);
    },
  },
};
</script>

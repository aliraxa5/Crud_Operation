<template>
  <div class="editpage">
    <h1 class="title">Add new User</h1>
    <!-- Add new user using two way binding -->
    <form v-on:submit.prevent="createProduct">
      <div class="field">
        <label class="label" for="add-name">Name</label> 
        <input class="input" id="add-name" v-model="product.name" required />
      </div>
      <div class="field">
        <label class="label" for="edit-email">Email</label>
        <input class="input" id="edit-email" v-model="product.email" />
      </div>
      <div class="field">
        <label class="label" for="edit-nickname">Nickname</label>
        <input class="input" id="edit-nickname" v-model="product.nickname" />
      </div>
      <div class="field">
        <label class="label" for="edit-bdate">Birthdate</label>
        <input class="input" id="edit-bdate" v-model="product.bdate" />
      </div>
      <div class="field">
        <label class="label" for="edit-gender">Gender</label>
        <input class="input" id="edit-gender" v-model="product.gender" />
      </div>
      <div class="buttons">
        <button type="submit" class="button is-primary save">Create</button>
        <router-link class="button cancel" to="/">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        id: "",
        name: "",
        email: "",
        nickname: "",
        bdate: "",
        gender: "",
      },
    };
  },
  methods: {
    createProduct: function () {
      var product = this.product;
      this.$store.dispatch("addProduct", product);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["fetchAllProducts"]),
  },
};
</script>

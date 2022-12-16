<template id="product-edit">
  <div class="editpage">
    <h1 class="title">Edit product</h1>
    {{ currentProduct }}
    <form v-on:submit.prevent="updateProduct">
      <div class="field">
        <label class="label" for="edit-name">Name</label>
        <input class="input" id="edit-name" v-model="product.name" required />
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
        <button type="submit" class="button is-primary save">Save</button>
        <router-link class="button cancel" to="/">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductEdit",
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
  computed: {
    ...mapGetters(["getProductById"]),
    currentProduct() {
      const foundProduct = this.getProductById(this.$route.params.product_id);
      this.product.id = foundProduct.id;
      this.product.name = foundProduct.name;
      this.product.email = foundProduct.email;
      this.product.nickname = foundProduct.nickname;
      this.product.bdate = foundProduct.bdate;
      this.product.gender = foundProduct.gender;
    },
  },
  methods: {
    updateProduct() {
      var product = this.product;
      this.$store.dispatch("updateProduct", product);
      this.$router.push("/");
    },
  },
};
</script>

<style>
form > div {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.field {
  display: flex;
  align-items: center;
  gap: 2rem;
}
h1.title {
  margin: 20px 0;
  font-weight: bold;
  color: gray;
}
.editpage {
  background: #add8e64d;
  width: 60%;
  margin: 40px auto;
  padding: 29px;
  border: 2px solid olive;
  border-radius: 25px;
}
.save {
  background: #587ecb;
  padding: 5px 20px;
  color: #fff;
  border: none;
  border-radius: 10px;
}
.cancel {
  background: red;
  padding: 5px 15px;
  color: #fff;
  border: none;
  border-radius: 10px;
  text-decoration: none;
}
</style>

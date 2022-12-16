<template id="product-delete">
  <div>
    <h1 class="title">Delete product "{{ product.name }}"</h1>
    <form v-on:submit="deleteProduct">
      <div class="notification is-warning">The action cannot be undone.</div>
      <div class="buttons">
        <button type="submit" class="button is-danger">Delete</button>
        <router-link class="button" to="/">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return { product: findProduct(this.$route.params.product_id) };
  },
  methods: {
    deleteProduct: function () {
      products.splice(findProductKey(this.$route.params.product_id), 1);
      router.push("/");
    },
  },
};
</script>

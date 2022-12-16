<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListProduct from "./components/ListProduct.vue";

export default {
  computed: {
    ...mapGetters(["fetchAllProducts"]),
    Products() {
      return this.fetchAllProducts;
    },
  },
  components: {
    ListProduct,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
td {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
th {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.dataTables_wrapper .dataTables_filter {
  float: initial;
  text-align: left;
}
.dataTables_wrapper .dataTables_length {
  float: right;
}
div#datatable_filter {
  margin: 20px 0;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: white !important;
  border: none;
  background: #587ecb;
}
a {
  text-decoration: none;
}
</style>

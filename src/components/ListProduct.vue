<template id="product-list">
  <div>
    <router-link class="button" :to="{ name: 'AddProduct' }">
      <span class="addproduct">Add User</span>
    </router-link>
    <table class="table is-striped" id="datatable">
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
           <!-- List all detail of user -->
          <td>
            <router-link
              v-bind:to="{
                name: 'product',
                params: { product_id: product.id },
              }"
              class="username userdetail"
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
            <span class="usergender" v-if="product.gender == 'Male'">
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
            <span class="usergenderf" v-else>
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
                class="button is-warning is-small editdata"
                v-bind:to="{
                  name: 'product-edit',
                  params: { product_id: product.id },
                }"
              >
                <img src="../assets/edit.svg" alt="edit" class="editimg" />
              </router-link>
              <span
                class="button is-danger is-small crossimgdata"
                @click="deleteProduct(product.id)"
              >
                <img src="../assets/cross.svg" alt="edit" class="crossimg" />
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
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
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
    gender(gen) {
      let icon = "../assets/male.svg";
      if (gen == "Male") {
        icon = "../assets/male.svg";
      }
      return icon;
    },
  },
  mounted() {
    $("#datatable").DataTable();
  },
};
</script>

<style>
.female-svg {
  width: 20px;
  height: 15px;
}
.male-svg {
  width: 15px;
  height: 15px;
}
.userdetail {
  text-align: initial;
}
.username {
  text-decoration: none;
  color: #212529;
  display: flex;
}
.username:hover {
  color: #212529;
}
.usergender {
  background: #69b4ad;
  padding: 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
}
.editimg {
  width: 20px;
}
.editdata {
  background: #d37733;
  padding: 3px;
}
.crossimg {
  width: 20px;
  cursor: pointer;
}
.crossimgdata {
  background: #bc3b3b;
  padding: 3px;
}
.buttons {
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addproduct {
  background: #587ecb;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 10px;
  display: inline-flex;
  margin: 20px;
}
input[type="search"] {
  outline: none;
}
.usergenderf {
  background: #df9fcd;
  padding: 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
}
</style>

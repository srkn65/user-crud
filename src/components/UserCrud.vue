<template>
  <div>
    <b-sidebar
      id="user-crud"
      title="User Create / Edit"
      backdrop-variant="'info'"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-form @submit.prevent="addUser()" ref="user-form">
          <b-form-group
            id="firstName"
            class="mt-3"
            label="First Name:"
            label-for="firstName"
          >
            <b-form-input
              id="firstName"
              placeholder="Enter firstname"
              required
              v-model="form.firstName"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="mt-3"
            id="lastName"
            label="Last Name:"
            label-for="firstName"
          >
            <b-form-input
              id="lastName"
              v-model="form.lastName"
              placeholder="Enter lastname"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group class="mt-3" id="age" label="Age:" label-for="age">
            <b-form-input
              id="age"
              v-model="form.age"
              placeholder="Enter age"
              required
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="mt-3"
            id="email"
            label="Email:"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              placeholder="Enter email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="mt-3"
            id="companyName"
            label="Company Name:"
            label-for="companyName"
          >
            <b-form-input
              id="companyName"
              placeholder="Enter companyname"
              required
              v-model="form.companyName"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="success" class="mt-3 w-100" block
            >Add User</b-button
          >
        </b-form>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "UserCrud",
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        age: null,
        email: null,
        companyName: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  methods: {
    ...mapMutations({
      setUser: "SET_USER",
    }),
    async addUser() {
      if (!this.emailControl()) {
        this.setUser(this.form);
        return (this.form = {
          firstName: null,
          lastName: null,
          age: null,
          email: null,
          companyName: null,
        });
      }
      alert("There is a user with the same e-mail");
    },
    emailControl() {
      const control = this.getUsers.some((x) => x.email === this.form.email);
      return control;
    },
  },
};
</script>

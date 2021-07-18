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
        <b-form>
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
              placeholder="Enter lastname"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group class="mt-3" id="age" label="Age:" label-for="age">
            <b-form-input
              id="age"
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
export default {
  name: "UserCrud",
};
</script>

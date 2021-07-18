<template>
  <div class="container mt-5">
    <div class="w-100 d-flex justify-content-end mb-2">
      <b-button
        v-b-toggle.user-crud
        variant="primary"
        class="float-right"
        v-b-tooltip.hover
        title="User add sidebar"
      >
        <b-icon icon="plus-circle-fill" variant="white"></b-icon
      ></b-button>
    </div>
    <crud-table />
    <user-crud />
  </div>
</template>
<script>
import CrudTable from "./components/CrudTable.vue";
import UserCrud from "./components/UserCrud.vue";
export default {
  components: { CrudTable, UserCrud },
  name: "UserCrudApp",
};
</script>
<style>
.sr-only {
  display: none;
}
</style>

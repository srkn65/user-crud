<template>
  <div class="container mt-5">
    <crud-table />
  </div>
</template>
<script>
import CrudTable from "./components/CrudTable.vue";
export default {
  components: { CrudTable },
  name: "UserCrud",
};
</script>
<style>
.sr-only {
  display: none;
}
</style>
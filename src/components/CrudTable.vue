<template>
  <div>
    <b-table :fields="fields" :items="getUsers" striped bordered hover></b-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fields: [
        { key: "firstName", label: "First Name", sortable: false },
        { key: "lastName", label: "Last Name", sortable: false },
        { key: "age", label: "Age", sortable: true },
        { key: "email", label: "Email", sortable: false },
        { key: "companyName", label: "Şirket ismi", sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
};
</script>

<template>
  <div>
    <b-table :fields="fields" :items="items" striped bordered hover></b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          firstName: "serkan",
          lastName: "korkac",
          age: 21,
          email: "korkacserkan@gmail.com",
          companyName: "X-WİSE",
        },
      ],
      fields: [
        { key: "firstName", label: "First Name", sortable: false },
        { key: "lastName", label: "Last Name", sortable: false },
        { key: "age", label: "Age", sortable: true },
        { key: "email", label: "Email", sortable: false },
        { key: "companyName", label: "Şirket ismi", sortable: false },
      ],
    };
  },
};
</script>

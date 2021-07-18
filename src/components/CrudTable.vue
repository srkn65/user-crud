<template>
  <div>
    <b-table :fields="fields" :items="getUsers" striped bordered hover>
      <template #cell(actions)="data">
        <div>
          <b-button
            v-b-toggle.user-crud
            variant="info"
            v-b-tooltip.hover
            title="User update"
            size="sm"
            style="margin-right: 5px"
            @click="$emit('updateform', data.item)"
          >
            <b-icon icon="pen" variant="white"></b-icon
          ></b-button>
          <b-button
            variant="danger"
            v-b-tooltip.hover
            title="User delete"
            size="sm"
          >
            <b-icon icon="trash" variant="white"></b-icon
          ></b-button>
        </div>
      </template>
    </b-table>
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
        { key: "companyName", label: "Company Name", sortable: false },
        { key: "actions", label: "Actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
};
</script>

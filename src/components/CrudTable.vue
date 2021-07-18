<template>
  <div>
    <b-input v-model="email" placeholder="Filter User Email" class="mb-2">
    </b-input>
    <b-table :fields="fields" :items="items" striped bordered hover>
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
            v-b-modal.delete-modal
            @click="deleteData = data.item"
          >
            <b-icon icon="trash" variant="white"></b-icon
          ></b-button>
        </div>
      </template>
    </b-table>
    <b-modal
      id="delete-modal"
      title="Delete User"
      ok-variant="danger"
      ok-title="Delete"
      @ok="deleteUser(deleteData)"
    >
      <p class="my-4">Are you sure you want to delete?</p>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
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
      deleteData: null,
      email: "",
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
    items() {
      return this.email
        ? this.getUsers.filter((x) => x.email.includes(this.email))
        : this.getUsers;
    },
  },
  methods: {
    ...mapMutations({
      deleteUser: "DELETE_USER",
    }),
  },
};
</script>

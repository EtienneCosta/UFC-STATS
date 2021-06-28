<template>
  <div>
    <v-app id="inspire">
      <v-card>
        <v-card-title style="font-family:Permanent Marker;font-size:30px;">
          <img
            src="@/assets/boxing-ring.png"
            width="50"
            height="50"
            alt="Notfound"
          />
          UFC Events
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :loading="loading"
          loading-text="Loading... Please wait"
          :headers="headers"
          :items="events"
          :search="search"
          :items-per-page="15"
        >
          <template v-slot:item.name="{ item }">
            <router-link :to="{ name: 'Event', params: { id: item.event } }">
              {{ item.name }}
            </router-link>
          </template>

        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {

   metaInfo:{
      title:'UFC Events'
    },

  
  name: "Events",
  data() {
    return {
      search: "",
      headers: [
        { text: "NAME",   value: "name",     sortable: true,    class: "black--text",align: "start"},
        { text:"LOCATION",value: "location", sortable: true,    class: "black--text",align: "start"},
        { text: "DATE",   value: "date",     sortable: true,    class: "black--text",align: "start"},
        { text: "Fights", value: "fights",   sortable: true,    class: "black--text",align: "start"},
      ],
      events: [],
      loading: true,
    };
  },

  created() {
    this.getEventsInfo();
  },

  methods: {
    getEventsInfo: function () {
      axios
        .get("http://localhost:8079/ufc/events")
        .then((res) => {
          this.events = res.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log("Error on obtaining the list of events ::" + e);
          this.loading = false;
        });
    },
  }
};
</script>
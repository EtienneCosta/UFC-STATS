<template>
  <div>
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          <img
            src="@/assets/boxing-ring.png"
            width="50"
            height="50"
            alt="Notfound"
          />
          Predictions History
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
          :items="predictions"
          :search="search"
          :items-per-page="15"
        >
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

  
  name: "PredictionsHistory",
  data() {
    return {
      search: "",
      headers: [
        { text: "Favourite",   value: "favourite",     sortable: true,    class: "black--text",align: "start"},
        { text:"Underdog",value: "underdog", sortable: true,    class: "black--text",align: "start"},
        { text: "Winner",   value: "winner",     sortable: true,    class: "black--text",align: "start"},
        { text: "Confidence", value: "confidence",   sortable: true,    class: "black--text",align: "start"},
        { text: "Date", value: "date",   sortable: true,    class: "black--text",align: "start"},

      ],
      predictions: [],
      loading: true,
    };
  },

  created() {
    this.getOldPredictions();
  },

  methods: {
    toID:function(name){
     return name.replaceAll(' ','_').toLowerCase
    }
    ,
    getOldPredictions: function () {
      axios
        .get("http://localhost:8078/predictions")
        .then((res) => {
          this.predictions = res.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log("Error on obtaining the list of old predictions ::" + e);
          this.loading = false;
        });
    },
  }
};
</script>
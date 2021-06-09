<template>
  <div>
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          <img
            src="@/assets/martial-arts.png"
            width="50"
            height="50"
            alt="Notfound"
          />
          UFC FIGHTERS
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
          :items="fighters"
          :search="search"
          :items-per-page="15"
        >
          <template v-slot:item.name="{ item }">
            <router-link :to="{ name: 'Fighter', params: { id: item.id } }">
              {{ item.name }}
            </router-link>
          </template>

          <template v-slot:item.weight="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-chip dark v-on="on">{{ item.weight }}</v-chip>
              </template>
              <span>{{ lbsTokg(item.weight) }} Kg</span>
            </v-tooltip>
          </template>

          <template v-slot:item.height="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-chip dark v-on="on">{{ item.height }}</v-chip>
              </template>
              <span>{{ feetTom(item.height) }} m</span>
            </v-tooltip>
          </template>

          <template v-slot:item.reach="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-chip dark v-on="on">{{ item.reach }}</v-chip>
              </template>
              <span>{{ inchesTocm(item.reach) }} cm</span>
            </v-tooltip>
          </template>

          <template v-slot:item.belt="{ item }">
            <img
              v-if="item.belt == 'true'"
              src="@/assets/belt.png"
              alt="ufc belt"
            />
            <img v-else alt="" />
          </template>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Fighters",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "NAME",
          value: "name",
          sortable: true,
          class: "black--text",
          align: "start",
        },
        {
          text: "NICKNAME",
          value: "nickname",
          sortable: true,
          class: "black--text",
        },
        {
          text: "HEIGHT",
          value: "height",
          sortable: true,
          class: "black--text",
        },
        {
          text: "WEIGHT",
          value: "weight",
          sortable: true,
          class: "black--text",
        },
        { text: "REACH", value: "reach", sortable: true, class: "black--text" },
        {
          text: "STANCE",
          value: "stance",
          sortable: true,
          class: "black--text",
        },
        { text: "W", value: "wins", sortable: true, class: "black--text" },
        { text: "L", value: "losses", sortable: true, class: "black--text" },
        { text: "D", value: "draws", sortable: true, class: "black--text" },
        { text: "BELT", value: "belt", sortable: true, class: "black--text" },
      ],
      fighters: [],
      loading: true,
    };
  },

  created() {
    this.getFightersInfo();
  },

  methods: {
    getFightersInfo: function () {
      axios
        .get("http://localhost:8079/ufc/fighters")
        .then((res) => {
          this.fighters = res.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log("Error on obtaining the list of fighters ::" + e);
          this.loading = false;
        });
    },
    lbsTokg: function (lbs) {
      if (lbs == "--") return lbs;
      else {
        var kg = (lbs.split("lbs")[0].trim() / 2.2046).toFixed(2);
        return kg;
      }
    },
    feetTom: function (feet) {
      if (feet == "--") return feet;
      else {
        var temp = feet.split("'");
        var meters = (
          parseFloat(temp[0] + "." + temp[1].trim()) * 0.3048
        ).toFixed(2);
        return meters;
      }
    },

    inchesTocm: function (inches) {
      if (inches == "--") return inches;
      else {
        var cm = (inches * 2.54).toFixed(2);
        return cm;
      }
    },
  },
};
</script>


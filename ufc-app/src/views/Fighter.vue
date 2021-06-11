<template>
  <div>
    <div>
      <div>
        <br />
        <h1>{{ this.fighter.name }}</h1>
        <h4>"{{ this.fighter.nickname }}"</h4>
        <h5>
          Record: {{ this.fighter.wins }}-{{ this.fighter.losses }}-{{
            this.fighter.draws
          }}
        </h5>

        <br />

        <b-card-group
          deck
          style="width: 75%; heigth: 50%; margin: auto; margin-right: 50px"
        >
          <b-card
            style="width:75% heigth:450px margin-right:50px "
            header-tag="header"
          >
            <template #header>
              <h6 class="mb-0"><b>Fighter Details</b></h6>
            </template>
            <b-card-text>
              <ul>
                <li>
                  <b class="fighter-details">Height:</b>
                  {{ this.fighter.height }}
                </li>
                <li>
                  <b class="fighter-details">Weight:</b
                  >{{ this.fighter.weight }}
                </li>
                <li>
                  <b class="fighter-details">Reach:</b>{{ this.fighter.reach }}
                </li>
                <li>
                  <b class="fighter-details">Stance:</b
                  >{{ this.fighter.stance }}
                </li>
                <li>
                  <b class="fighter-details">DOB:</b>{{ this.fighter.dob }}
                </li>
              </ul></b-card-text
            >
          </b-card>
          <b-card
            style="width: 75%; heigth: 50%; margin-right: 50px"
            header-tag="header"
          >
            <template #header>
              <h6 class="mb-0"><b>Career Statistics</b></h6>
            </template>
            <b-card-text>
              <div class="wrapper">
                <div id="left-block">
                  <ul>
                    <li><b>SLpM:</b> {{ this.fighter.slpm }}</li>
                    <li><b>Str. Acc:</b> {{ this.fighter.stracc }}%</li>
                    <li><b>SApM:</b> {{ this.fighter.sapm }}</li>
                    <li><b>Str. Def:</b> {{ this.fighter.strdef }}%</li>
                  </ul>
                </div>

                <div id="right-block">
                  <ul>
                    <li><b>TD Avg:</b> {{ this.fighter.tdavg }}</li>
                    <li><b>TD Acc:</b> {{ this.fighter.tdacc }}%</li>
                    <li><b>TD Def:</b> {{ this.fighter.tddef }}%</li>
                    <li><b>Sub. Avg:</b> {{ this.fighter.subavg }}</li>
                  </ul>
                </div>
              </div>
            </b-card-text>
          </b-card>

          <b-card
            style="width: 75%; heigth: 50%; margin-right: 50px"
            header-tag="header"
            grid-list-md
          >
            <template #header>
              <h6 class="mb-0"><b>Help Guide</b></h6>
            </template>
            <b-card-text>
              <ul>
                <li><b>SLpM</b> - Significant Strikes Landed per Minute</li>
                <li><b>Str. Acc.</b> - Significant Striking Accuracy</li>
                <li><b>SApM</b> - Significant Strikes Absorbed per Minute</li>
                <li>
                  <b>Str. Def.</b> - Significant Strike Defence (the % of
                  opponents strikes that did not land)
                </li>
                <li>
                  <b>TD Avg.</b> - Average Takedowns Landed per 15 minutes
                </li>
                <li><b>TD Acc.</b> - Takedown Accuracy</li>
                <li>
                  <b>TD Def.</b> - Takedown Defense (the % of opponents TD
                  attempts that did not land)
                </li>
                <li>
                  <b>Sub. Avg.</b> - Average Submissions Attempted per 15
                  minutes
                </li>
              </ul>
            </b-card-text>
          </b-card>
          <img
            v-if="flag"
            :src="'' + this.image"
            @error="imgError"
            style="width: auto; height: auto"
          />
        </b-card-group>
      </div>
    </div>

    <div>
      <b-table-simple
        style="width: 80%; margin: auto; margin-bottom: 35px"
        hover
        medium
        responsive
      >
      
        <b-thead head-variant="dark">
          <b-tr>
            <b-th>Result</b-th>
            <b-th>Fighter</b-th>
            <b-th>KD</b-th>
            <b-th>STR</b-th>
            <b-th>TD</b-th>
            <b-th>SUB</b-th>
            <b-th>Event</b-th>
            <b-th>Method</b-th>
            <b-th>Round</b-th>
            <b-th>Time</b-th>
            <b-th>Bout</b-th>
            <b-th>Referee</b-th>
          </b-tr>
        </b-thead>

        <b-tbody v-for="(fight, index) in fights" v-bind:key="index">
          <b-tr>
            <b-th>
              <p>{{ fight.redcornerresult }}</p>
              <p>{{ fight.bluecornerresult }}</p>
            </b-th>

            <b-td>

              <p @click="goFighter(fight.redcorner.toLowerCase().replaceAll(' ', '_')) ">
                <u>{{ fight.redcorner }} </u>
              </p>

              <p @click="goFighter(fight.bluecorner.toLowerCase().replaceAll(' ', '_'))">
                <u>{{ fight.bluecorner }} </u>
              </p>

            </b-td>

            <b-td>
              <p>{{ fight.redcornerkd }}</p>
              <p>{{ fight.bluecornerkd }}</p>  
            </b-td>

            <b-td>
              <p>{{ fight.redsigstr }}</p>
              <p>{{ fight.bluesigstr }}</p>  
            </b-td>

            <b-td>
              <p>{{ fight.redcornertd }}</p>
              <p>{{ fight.bluecornertd }}</p>
            </b-td>

            <b-td>
              <p>{{ fight.redcornersubatt }}</p>
              <p>{{ fight.redcornersubatt }}</p>
            </b-td>

            <b-td>
              <p @click="goEvent(fight.eventname.toLowerCase().replaceAll(' ', '_'))"><u> {{ fight.eventname }} </u></p>
              <p>{{ fight.date }}</p>
            </b-td>

            <b-td>
              <p>{{ fight.method }}</p>
            </b-td>

            <b-td>
              <p>{{ fight.round }}</p>
            </b-td>

            <b-td>
              <p>{{ fight.time }}</p>
            </b-td>

            <b-td>
                <p>{{ fight.bout }}</p>
            </b-td>
             <b-td>
                <p>{{ fight.referee }}</p>
            </b-td>                       
          </b-tr>
        </b-tbody>
      </b-table-simple>
 
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "Fighter",

  created() {
    this.getFighterInfo();
    this.getFighterFights();
  },

  methods: {
    teste(){
alert('Olá mundo')
    },
      close () {
      this.dialog = false
    },

    edit(fight){
      this.dialog=true;
         console.log(fight)
    },
  
    goFighter: function (id) {
      this.params = id;
      this.$router.push({ name: "Fighter", params: { id: id } });
      this.$router.go();
    },
      goEvent: function (id) {
      this.params = id;
      this.$router.push({ name: "Event", params: { id: id } });
    },
    getFighterInfo: async function () {
      axios
        .get("http://localhost:8079/ufc/fighter/" + this.$route.params.id)
        .then((res) => {
          this.fighter = res.data[0];
          var image_name = this.fighter.name.replace(" ", "-") + ".png";

          try {
            this.image = require("@/assets/Fighters/" + image_name);
            this.flag = true;
          } catch (e) {
            this.flag = false;
          }
        })
        .catch((e) => {
          console.log("Error on obtaining the info of a fighter ::" + e);
        });
    },

    getFighterFights: async function () {
      axios
        .get(
          "http://localhost:8079/ufc/fighter/fights/" + this.$route.params.id
        )
        .then((res) => {
          this.fights = res.data;
          console.log(this.fights);
        })
        .catch((e) => {
          console.log("Error on obtaining the fights of a fighter ::" + e);
        });
    },

    imgError: function () {
      this.src = "";
    },
  },

  data() {
    return {
      fighter: {},
      fights: [],
      image: "",
      flag: false,
      dialog:false
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}

h1,
h4,
h6,
h5 {
  text-align: center;
  font-weight: bold;
}
ul {
  list-style-type: none;
}

.fighter-details {
  padding-right: 25px;
}
.card {
  height: 470px;
  width: 450px;
}

li {
  text-align: left;
  margin-left: 5px;
  margin-top: 8px;
}

#left-block {
  float: left;
  text-align: right !important;
}

.mydetails {
  padding-top: 35px !important;
}

#right-block {
  float: right;
  width: 150px;
  text-align: right;
}
</style>
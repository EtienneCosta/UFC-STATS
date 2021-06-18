<template>
  <div>
    <h1 style="color:red; text-align:center; margin-top:30px;">{{this.details.name}}</h1>
    <div style="border-style: ridge; width:40%; margin:auto; margin-top:50px; margin-down:50px;">
        <span style="margin-left:5px;"><b>LOCATION: </b>{{this.details.location}}</span>
        <span style="margin-left:40px;"><b>DATE: </b>{{this.details.date}}</span>
    </div>

    <div style="margin-top:50px;">
      <b-table-simple
        style="width: 75%; margin: auto; margin-bottom: 35px"
        hover
        large
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
              <p>{{ fight.redcornersigstr }}</p>
              <p>{{ fight.bluecornersigstr }}</p>  
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
  metaInfo:{
      title:'UFC EVENT'
    },
  
  name: "Event",
  props: ["idr","details"],

  data:function() {
    return {
      fights:[]
    }
  },

created(){
    this.getEventDetails();
  },

methods:{

    goFighter: function (id) {
      this.$router.push({ name: "Fighter", params: { id: id } });
    },

    getEventDetails: async function() {
       axios
          .get("http://localhost:8079/ufc/events/fights/"+this.idr)
          .then((res) => {
             this.fights = res.data;
        })
        .catch((e) => {
          console.log("Error on obtaining the event details ::" + e);
        });
      }
    }
};
</script>
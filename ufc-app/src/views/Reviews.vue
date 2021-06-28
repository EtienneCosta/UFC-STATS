<template>
<div style="width:60%;margin:auto;" id="app">
  <v-app id="inspire">
    <v-timeline>
      <v-timeline-item
        v-for="(review, i) in reviews"
        :key="i"
        color="red"
        small
      >
        <template v-slot:opposite>
          <span
            class="`headline font-weight-bold red--text`"
            v-text="review.date"
          ></span>
        </template>

        <v-card style="background-color:white;" class="elevation-2">
        <v-card-title style="font-family:Permanent Marker !important;color:firebrick; font-weight:bold;" class="text-h5">
            {{review.name}}
        </v-card-title>
        <v-card-text style="color:black; font-weight:bold;">
            {{review.review}}
        </v-card-text>
      </v-card>

      </v-timeline-item>
    </v-timeline>
  </v-app>
</div>
</template>

<script>

import axios from 'axios'
  export default {
    name: "Reviews",

    data: function(){

        return{

            reviews:[],
            years: [
              {
                color: 'blue',
                year: '1960',
              }
            ]
        }
    },

    created() {
        this.getReviews();
    
    },
    methods:{
        getReviews:function(){
            axios.get('http://localhost:8078/reviews')
            .then(res=>{
                this.reviews=res.data;
            })

            .catch(e=>{
                console.log('Error retrieving the reviews '+e);
            })
        }
    }
  }
</script>
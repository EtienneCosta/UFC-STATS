<template>

 <div class="predict" >

    <h1 style="font-family:Permanent Marker;text-align:center; padding-top:50px;">UFC Fight Predictions</h1>
    <div class="wrapper">

            <v-app class="favourite">
                <h3 style="font-family:Permanent Marker;color:firebrick;">Favourite Fighter</h3>
              <v-container fluid>
                 
                   <v-autocomplete
                      :items="fighters"
                      label="Select your fighter"
                      v-model="favourite"
                    ></v-autocomplete>

          <img
            :src="'' + this.favourite_image"
            @error="imgError"
            style="width: auto; height: auto"
          />



            </v-container>
        </v-app>

     <v-app class="underdog">
                <h3 style="font-family:Permanent Marker;color:firebrick;">Underdog Fighter</h3>
              <v-container fluid>
                         
                   <v-autocomplete
                      :items="fighters"
                      label="Select your fighter"
                      v-model="underdog"
                    ></v-autocomplete>

          <img
            :src="'' + this.underdog_image"
            @error="imgError"
            style="width: auto; height: auto"
          />                  
            </v-container>
        </v-app>



 <div class="my-2 text-center">
            <v-btn
               x-large
      class="predict-btn"
      :loading="loading"
      :disabled="loading"
      @click="loader = 'loading';predictFight()"
            >
              Make Prediction 
            </v-btn>
          </div>

    </div>

<div class="Prediction-Result">
 <v-row justify="space-around">
   
    <v-dialog
      v-model="dialog"
      max-width="500"
      transition="dialog-bottom-transition"
      v-if="dialog"
    >
    
    <v-card>
      <v-spacer></v-spacer>
            <v-toolbar 
            style="font-size:25px;"
            color="dark" dark>Prediction Result</v-toolbar>

            <v-card-text>
              <div style="text-align:center;" class="text-h5 pa-12">
                <p>Winner: {{winner}}</p>
                <p>Confidence: {{confidence}}% </p>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-end">
              <v-btn
                text
                color="dark"
                @click="dialog = false"
              >OK</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
  </v-row>

</div>
 
    
</div>  


</template>


<script>

import axios from 'axios'
export default {
     metaInfo:{
      title:'UFC Predictions'
    },

    data: function(){
        return{
        loader: null,
        loading: false,
        favourite: null,
        favourite_image:'',
        underdog:  null,
        underdog_image:'',
        fighters:[],
        dialog:false,
        winner:'',
        confidence:0.0
    }
        },

    created() {
    this.getFightersNames();
    
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },

      favourite:function(){
        try{
            var image_name = this.favourite.replaceAll(" ", "-") + ".png";
            this.favourite_image = require("@/assets/face/" + image_name);
        }
        catch{
            this.favourite_image=''
        }
      },
       underdog:function(){
        try{
            var image_name = this.underdog.replaceAll(" ", "-") + ".png";
            this.underdog_image = require("@/assets/face/" + image_name);
        }
        catch{
            this.underdog_image=''
        }
      }
    },
  

    methods:{


      registerPrediction: async function(fighter1,fighter2,winner,confidence){
          var predicition = {
            'favourite':fighter1,
            'underdog':fighter2,
            'winner':winner,
            'confidence':confidence+' %'
          }

          axios.post('http://localhost:8078/predictions/',predicition)
          .then(res=>{
              console.log('Prediction registered ...');
          })
          .catch(e=>{
            console.log('Error posting the prediction '+e);
          })

      }

      ,

      predictFight: async function(){
        var fighter1=this.favourite
        var fighter2=this.underdog
          
          if(fighter1 && fighter2){

            var params='fighter1='+fighter1+'&'+'fighter2='+fighter2
            axios.get('https://fight-predictor-api.herokuapp.com/api/v1.0/predict?'+params)
              .then(res =>{
                console.log(res.data);
                this.winner=res.data.winner;
                this.confidence=parseFloat(res.data.confidence).toFixed(2)*100;
                this.registerPrediction(fighter1,fighter2,this.winner,this.confidence);
                this.dialog=true;
              })
              .catch(e=>{
                console.log('Error obtaining the prediction '+e);
              })
          }

          else{
            alert('Pick up two fighters')
          }
      },

    imgError: function () {
          this.src = "";
    },
        getFightersNames: async function(){

            axios.get('http://localhost:8079/ufc/fighters/names/')
                .then(res =>{
                    res.data.forEach(element => {
                        this.fighters.push(element.name);
                    });
                })
                .catch(e=>{
                    console.log('Error obtaining the name of fighters ... '+e);
                })
        }

    }
}
</script>



<style scoped>

.wrapper {
  width: 100%;
  height: 80%;
  margin: auto;
  margin-top:50px;
  padding: 10px;
}

.favourite{
    margin-left: 25px;
    width: 30%;
    height: 80%;
    float: left;
    font-weight: bolder;
    background-color: transparent;

}

.underdog{
    margin-right: 25px;
    width: 30%;
    height: 80%;
    float: right;
    font-weight: bolder;
    font-size: 150px !important;
    background-color: transparent;

}



h3{
    
    text-align: center;
    margin-bottom: 45px;
    font-size: 50px !important;
}

h1,h3{
    text-align: center;
    color:firebrick;
    font-weight: bolder;
    font-size: 50px !important;
}


.predict{
    width:  100% !important;
    height: 1000px !important;
    background-image: url('https://www.seekpng.com/png/full/181-1817934_ea-sports-ufc-xbox-one-game.png');
    background-repeat: no-repeat;
    background-position: center; 
}

.predict-btn{
    margin-top: 550px ;
    color:white !important;
    background-color: firebrick !important;
    font-weight:bolder !important;
    font-size: large !important;
        width: large !important ;
            size: x-large !important;


}


.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
<template>
 <div class="predict" >

     <h1 style="text-align:center; padding-top:50px;">UFC Fight Predictions</h1>

    <div class="wrapper">

            <v-app class="favourite">
                <h3>Favourite Fighter</h3>
              <v-container fluid>
                 
                   <v-autocomplete
                      :items="fighters"
                      label="Select your fighter"
                      v-model="favourite"
                    ></v-autocomplete>

            </v-container>
        </v-app>

     <v-app class="underdog">
                <h3>Underdog Fighter</h3>
              <v-container fluid>
                         

                   <v-autocomplete
                      :items="fighters"
                      label="Select your fighter"
                      v-model="underdog"
                    ></v-autocomplete>

            </v-container>
        </v-app>


    </div>

      
  </div>  
</template>




<script>

import axios from 'axios'
export default {
    data: function(){
        return{
        underdog:  null,
        favourite: null,
        fighters:[],
        items: ['Foo', 'Bar', 'Fizz', 'Buzz',1,2,3,4,5,6,7,8,9,0,12,13,14,15,12,55,3333,231,1341,144],
    }
        },

    created() {
    this.getFightersNames();
    
    },
  

    methods:{
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
    background-color: transparent;
        font-weight: bolder;

}

.underdog{
    margin-right: 25px;
    width: 30%;
    height: 60%;
    float: right;
    background-color: transparent;
    font-weight: bolder;
    font-size: 150px !important;
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

</style>
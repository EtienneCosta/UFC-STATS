<template>
  <v-card
    class="elevation-16 mx-auto rate-card"
    width="800"
    height="400"
  >
   
  <div id="app" style="width:500px; margin-left:15%;">
    <h3 style="text-align:center; color:firebrick;margin-top:20px;"> Rate Our Site</h3>

       <v-card-text>
      If you enjoy using <i>UFC STATS</i>, please take a few seconds to rate your experience with the website. It really helps!
    </v-card-text>
  <v-app id="inspire">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
  
     <v-text-field
        v-model="review"
        :counter="150"
        :rules="reviewRules"
        label="Review"
        required
      ></v-text-field>

  
     
     <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>

    </v-form>
  </v-app>
</div>




<v-snackbar
      v-if="snackFlag"
      v-model="snackFlag"
      :timeout="timeout"
    >
      Thanks for your review 

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackFlag = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </v-card>
  
</template>

<script>
import axios from 'axios'
  export default {
    metaInfo:{
      title:'Rate Us'
    },  
    name: "Rate",
    data: () => ({
      timeout: 5000,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      review: '',
      reviewRules: [
        v => !!v || 'Review is required',
        v => (v && v.length <= 150) || 'Review must be less than 150 characters',
      ],
      snackFlag:false   
   
   
   }),

  methods:{
    validate () {
  
      if(this.$refs.form.validate()){
        var rev = {
              'review':this.review,
              'name':this.name,
              'email':this.email,
            }
        axios.post('http://localhost:8078/reviews',rev)
          .then(res=>{
                this.snackFlag=true
                this.$refs.form.reset()
          })
          .catch(e=>{
            console.log('Error posting the review '+e)
          })
      }
    
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
  }
  }
</script>


<style scoped>

.rate-card{
  margin-bottom:45px ;

}


</style>
<template>
    <ConsultEvent :idr="$route.params.id" :details="this.event_details" />
</template>


<script>
import axios from 'axios';
import ConsultEvent from "../components/ConsultEvent.vue"
export default {

   metaInfo:{
      title:'UFC Event'
    },

    components: {
        ConsultEvent
    },

    data: function(){
      return{
        event_details:{},
      }
    },

    created(){
        this.getEventDetails();
    },

    methods:{
      getEventDetails: async function() {
       axios
          .get("http://localhost:8079/ufc/events/details/"+this.$route.params.id)
          .then((res) => {
             this.event_details = res.data[0];
             
             this.flag=true
        })
        .catch((e) => {
          console.log("Error on obtaining the event details ::" + e);
        });
    }
}
    
};
</script>




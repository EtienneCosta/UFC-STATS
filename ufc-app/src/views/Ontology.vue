<template>
  <div>
        <h1 style="font-family:Permanent Marker;text-align:center">ONTOLOGY DETAILS</h1>
         <div style="border:solid; width:500px; margin:auto; margin-top:50px;margin-bottom:50px;">
           <p><b>Total statements:   </b><u>{{info.total}}</u></p>
           <p><b>Inferred:  </b><u>{{info.inferred}}</u> </p>
           <p><b>Explicit: </b><u>{{info.explicit}}</u></p>
       </div>
  </div>   
</template>

<script>
import axios from "axios";
export default {
  metaInfo:{
      title:'Ontology Details'
    },
  name: "Ontology",
  data() {
    return {
      info: null,
    };
  },

  created() {
    this.getRepoDetails();
  },

  methods: {
    getRepoDetails: async function () {
      axios
        .get("http://localhost:8079/ufc/repositorie")
        .then(res => {
          this.info=res.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log("Error on obtaining the info of repositorie ::" + e);
          this.loading = false;
        });
    }, 
  }
};
</script>


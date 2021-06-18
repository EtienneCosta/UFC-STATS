<template>
  <div>
    <Background></Background>
  </div>
</template>

<script>
// @ is an alias to /src
import Background from "@/components/Background.vue";


export default {
   metaInfo:{
      title:'UFC STATS'
    },
  name: "Home",
  components: {
    Background
  },
};
</script>

<style scoped >

</style>
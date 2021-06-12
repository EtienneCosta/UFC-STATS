<template>

<div>

    <h1 style="font-weight:bold; color:black; text-align:center;margin-top:50px;">RECORD BOOK</h1>


<div style="margin-top:100px; font-weight:bold;">
  <b-tabs content-class="mt-3" justified>
    <b-tab title="Career" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Fight"><p>I'm the second tab</p></b-tab>
    <b-tab title="Event"><p>I'm the second tab</p></b-tab>
    <b-tab title="Location"><p>I'm the second tab</p></b-tab>
    <b-tab title="Referee"><p>I'm the second tab</p></b-tab>   
  </b-tabs>
</div>

</div>

</template>

<script>
  export default {
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>


<style scoped>

.v-slide-group__content{

} 

.v-tabs-bar__content{
                margin-left:500px !important;


}


</style>
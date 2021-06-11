<template>
  <b-navbar toggleable >
    <b-navbar-brand href="/" tag="h1" class="mb-0">            
        <img src="@/assets/ufclogo.png" class="d-inline-block align-top ufc-logo" alt="UFC-Stats-Logo">
    </b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/ufc/events">
          <img class="drop-icon" src="@/assets/boxing-ring.png"/>
            Events & Fights
        </b-nav-item>
        <b-nav-item href="/ufc/fighters">
            <img class="drop-icon" src="@/assets/martial-arts.png"/>
            Fighters
        </b-nav-item>

        <b-nav-item href="/ufc/predictions">
          <img class="drop-icon" src="@/assets/prediction.png" />
          Predictions
        </b-nav-item>

        <b-nav-item href="#">
          <img class="drop-icon" src="@/assets/interactive-display.png" />
          Stat Leaders
        </b-nav-item>

        <b-nav-item href="#">
          <img class="drop-icon" src="@/assets/settings.png" />
        Settings
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped >


.ufc-logo{
  width:auto !important;
  height:auto !important;
  margin-left:0px !important;

}

/* Permite modificar a cor dos icons da NavBar */
.bi-chevron-bar-down,.bi-chevron-bar-up{
  color:white  !important;
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: black !important;
    font-weight: bold !important;
    border-style: groove !important;
}

.navbar-collapse{
  background-color:white !important;
}

.nav-link  {  
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.navbar{
  background-color: black !important ;
}

.drop-icon {
  width: 35px !important;
  height: 35px !important;
  margin-left:30px !important;
}

</style>

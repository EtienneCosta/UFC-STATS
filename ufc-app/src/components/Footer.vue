<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="text-center footer-details"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text footer-info">
UFC has revolutionized the fight business and today stands as a premium global sports brand, media content company and the largest Pay-Per-View (PPV) event provider in the world      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text footer-info">
        {{ new Date().getFullYear() }} — <strong>UFC STATS</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>

.footer-details,footer{
  background-color:black  !important;
  margin:auto;
}

.footer-info{
  color:white !important;
  font-weight: bold;
  font-size:15px !important;
  text-align: center !important;
}

</style> 
<template>

<div class="background-video">
<video autoplay  loop id="myVideo">
  <source src="../assets/Highlights.mp4" type="video/mp4">
</video>
</div>


<!--

<video autoplay muted loop id="myVideo">
  <source src="../assets/Highlights.mp4" type="video/mp4">
</video>

-->
</template>


<script>
export default {

}
</script>

<style scoped>

.background-video{
  height: 830px;
  margin: auto;
  overflow: hidden;
  border-style: solid;
  border-color: white;
}

#myVideo {
    object-fit:fill;
}
</style>

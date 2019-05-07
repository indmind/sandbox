<template>
  <div class="home">
    <img alt="Vue logo" id="logo" src="../assets/dvync_logo.png" />
    <HelloWorld msg="Welcome to indmind's lab!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#logo {
  width: 250px;
}
</style>

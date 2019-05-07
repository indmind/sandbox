<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/plane">Plane</router-link>
    </div>

    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito");

body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding-top: 60px;
}

#nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 20px;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin: 5px;
    transition: 0.3s ease-in-out;

    &.router-link-exact-active {
      color: #83e799;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>

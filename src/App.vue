<template>
  <div id="app">
    <div id="nav">
      <div class="links-container">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/plane">Plane</router-link>
        <router-link to="/sortable">Sortable</router-link>
      </div>

      <img alt="Vue logo" id="brand" src="@/assets/dvync_logo.png" />
    </div>

    <vue-page-transition name="fade-in-right">
      <router-view id="main-view" />
    </vue-page-transition>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito");

body {
  margin: 0;
  padding: 0;
  background: #455c74;
  color: white;
  max-width: 100%;
  overflow-x: hidden !important;
}

.links-container {
  float: right;
  margin-right: 25px;
  padding-top: 5px;
}

#brand {
  width: 30px;
  float: left;
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#main-view {
  padding-top: 60px;
  margin: 0px 10px;
}

#nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 10px;
  text-align: left;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  box-shadow: 0px 3px 11px 1px rgba(0, 0, 0, 0.75);

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

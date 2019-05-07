<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/plane">Plane</router-link>
    </div>

    <transition @enter="enter" @leave="leave" :css="false" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
import TweenMax from "gsap/TweenMax";
import { Power4 } from "gsap/TweenMax";

export default {
  methods: {
    enter(el, done) {
      TweenMax.fromTo(
        el,
        1,
        {
          autoAlpha: 0,
          scale: 1.5
        },
        {
          autoAlpha: 1,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Power4.easeOut,
          onComplete: done
        }
      );
    },
    leave(el, done) {
      TweenMax.fromTo(
        el,
        1,
        {
          autoAlpha: 1,
          scale: 1
        },
        {
          autoAlpha: 0,
          scale: 0.8,
          ease: Power4.easeOut,
          onComplete: done
        }
      );
    }
  }
};
</script>

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

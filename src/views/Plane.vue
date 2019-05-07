<template>
  <div id="plane">
    <section id="sky">
      <h1>Fly as high as you can</h1>
      <img class="plane" alt="papper-plane" src="../assets/paper-plane.png" />
    </section>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
import { TweenLite, SlowMo, Elastic } from "gsap/TweenMax";

export default {
  name: "plane",
  data() {
    return {
      flightPath: {
        curviness: 2,
        autoRotate: 40,
        values: [
          { x: -10, y: -10 },
          { x: window.innerWidth * 0.4, y: 150 },
          { x: window.innerWidth * 0.8, y: -180 },
          { x: window.innerWidth * 0.4, y: -122 },
          { x: window.innerWidth * 1.3, y: -250 }
        ]
      }
    };
  },
  mounted() {
    document.body.style.overflow = "hidden";

    const tween = new TimelineLite();

    tween.add(
      TweenLite.to(".plane", window.innerWidth / 425 + 1, {
        bezier: this.flightPath,
        ease: SlowMo.ease.config(0.3, 0.2, false)
      })
    );

    tween.add(
      TweenLite.from(
        "#sky h1",
        5,
        { y: "250", opacity: 0, ease: Elastic.easeOut },
        "-=5"
      )
    );
  },
  destroyed() {
    document.body.style.overflow = "visible";
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Amatic+SC");

@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

#sky {
  @include flexCenter();

  position: relative;
  overflow: hidden;
  height: 100vh;

  h1 {
    color: white;
    font-size: 5em;
    font-family: "Amatic SC", cursive;
    padding-bottom: 100px;
  }

  .plane {
    position: absolute;
    left: -30%;
    top: 50%;
    width: 10vw;
  }
}
</style>

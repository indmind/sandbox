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
          { x: 0, y: -150 },
          { x: 600, y: 150 },
          { x: 1200, y: -150 },
          { x: 700, y: -100 },
          { x: window.innerWidth + 400, y: -200 }
        ]
      }
    };
  },
  mounted() {
    document.body.style.overflow = "hidden";

    const tween = new TimelineLite();

    tween.add(
      TweenLite.to(".plane", 4, {
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
  }

  .plane {
    position: absolute;
    left: -20%;
    top: 50%;
    width: 8vw;
    // transform: rotate(25deg);
  }
}
</style>

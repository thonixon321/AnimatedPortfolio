<template>
  <div id="app">
    <nav
      v-anime="{ opacity: [0,1], duration: 2000, delay: 7000}"
      class='nav absolute top-0 left-0'
    >

      <div
        @click="homeRoute()"
        class='nav__logo cursor-pointer text-gray-200'
      >
        Logo
        <span class="nav__logo--name">
          TomDesigns</span>
      </div>

      <ul class='nav__items text-gray-700'>

        <li
          @click="projectsRoute()"
          class='nav__item'
        >
          Projects
        </li>

        <li class='nav__item'>About</li>

        <li class='nav__item'>Contact</li>

      </ul>
    </nav>
    <transition
      v-on:enter="transitionNameEnter"
      v-on:leave="leaveFirst"
      v-bind:css="false"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      transitionNameEnter: "",
      transitionNameLeave: "",
    };
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/");
      const fromDepth = from.path.split("/");

      console.log(toDepth, fromDepth);

      if (toDepth[1] === "projects") {
        this.transitionNameEnter = this.enterFirst;
      } else {
        this.transitionNameEnter = "";
      }
    },
  },

  methods: {
    homeRoute() {
      this.$anime({
        targets: "#me",
        scale: [0, 1],
        duration: 3000,
        delay: 100,
      });

      this.$anime({
        targets: "figure",
        scale: [0, 1],
        duration: 4000,
        delay: (el, i) => i * 100,
      });

      this.$anime({
        targets: ".title-area",
        scale: [0, 1],
        duration: 4000,
        delay: (el, i) => i * 100,
      });

      this.$router.push({ name: "Home" });
    },

    projectsRoute() {
      this.$anime({
        targets: "#me",
        scale: [1, 0],
        duration: 3000,
        delay: 100,
      });

      this.$anime({
        targets: "figure",
        scale: [1, 0],
        duration: 4000,
        delay: (el, i) => i * 100,
      });

      this.$anime({
        targets: ".title-area",
        scale: [1, 0],
        duration: 4000,
        delay: (el, i) => i * 100,
      });

      this.$router.push({ name: "Projects" });
    },

    enterFirst() {
      this.$anime({
        targets: "#first",
        d: [
          {
            value:
              "m -67.914066,-36.99575 c 144.20161,144.68936 72.737714,229.19037 329.975556,182.8637 186.48076,-93.59733 124.14214,-72.56923 353.32275,36.56468 47.86511,52.36998 240.32864,54.93661 322.20571,-7.13599 402.30525,-304.99543 532.60075,48.9761 711.27985,1.56666 325.9688,-35.61402 147.4992,-106.581865 369.1258,-221.914039 z",
          },
          {
            value:
              "M -67.914066,-36.99575 C 76.287544,107.69361 -102.43412,2281.7349 154.80372,2235.4082 c 186.48076,-93.5973 227.4274,-1210.6933 456.60801,-1101.5594 47.86511,52.37 377.38024,362.8061 459.25727,300.7335 402.3053,-304.9954 520.6833,11.2373 699.3624,-36.1722 325.9688,-35.614 26.3376,-1328.128665 247.9642,-1443.460839 z",
          },
        ],
        translateY: [-600, 0],
        easing: "easeInQuad",
        opacity: 1,
        duration: 3000,
      });
    },

    leaveFirst(el, done) {
      this.$anime({
        targets: "#first",
        translateY: -3500,
        easing: "easeInQuad",
        opacity: [1, 0],
        duration: 2500,
        complete: done,
      });
    },
  },
};
</script>

<style lang="scss">
@import "./styles/global.scss";
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(
      -120deg,
      transparent 0%,
      transparent 42%,
      rgba(0, 0, 0, 0.9) 42%
    ),
    url(./assets/images/email-pattern.png);

  background-attachment: fixed;
}
</style>

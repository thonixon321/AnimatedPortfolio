<template>
  <div id="app" class="font-body">
    <transition v-on:enter="enterFirst" v-on:leave="leaveFirst" v-bind:css="false">
      <Drip v-if="bgChange" :bgColors="bg" />
    </transition>

    <div class="hero-section col-span-3 flex items-center">
      <div class="w-1/2 text-center z-20">
        <div class="text-4xl hello-sect flex justify-center">
          <p v-anime="{ opacity: [0, 1], translateY: [-30, 0], duration: 500, delay: 100 }">Hello</p>
          <p
            v-anime="{ opacity: [0, 1], translateY: [-30, 0], duration: 500, delay: 400 }"
            class="mx-2"
          >there!</p>
          <p v-anime="{ opacity: [0, 1], translateY: [-30, 0], duration: 500, delay: 700 }">I'm</p>
        </div>
        <a href="#" class="text-huge font-bold flex justify-center my-4">
          <div class="letter">T</div>
          <div class="letter">h</div>
          <div class="letter">o</div>
          <div class="letter">m</div>
          <div class="letter">a</div>
          <div class="letter">s</div>
          <div class="mx-4"></div>
          <div class="letter">N</div>
          <div class="letter">i</div>
          <div class="letter">x</div>
          <div class="letter">o</div>
          <div class="letter">n</div>
        </a>
        <div class="text-4xl hello-sect flex justify-center">
          <p v-anime="{ opacity: [0, 1], translateY: [30, 0], duration: 500, delay: 100 }">Front-end</p>
          <p
            v-anime="{ opacity: [0, 1], translateY: [30, 0], duration: 500, delay: 400 }"
            class="mx-2"
          >Web</p>
          <p v-anime="{ opacity: [0, 1], translateY: [30, 0], duration: 500, delay: 700 }">Developer</p>
        </div>
      </div>

      <figure
        id="me"
        class="me"
        v-anime="{ opacity: [0, 1], translateY: [-900, 0], duration: 2500, delay: 1000 }"
      >
        <img src="./assets/images/me_in_phone-cut.png" alt="Thomas in phone" />
      </figure>
      <figure
        v-anime="{ opacity: [0, 1], translateY: [-900, 0], duration: 2500, delay: 200 }"
        class="laptop"
      >
        <img src="./assets/images/laptop.png" alt="Laptop" />
      </figure>
      <figure
        class="mouse"
        v-anime="{ opacity: [0, 1], translateY: [-900, 0], duration: 2500, delay: 300 }"
      >
        <img src="./assets/images/mouse.png" alt="Mouse" />
      </figure>
      <figure
        class="coffee"
        v-anime="{ opacity: [0, 1], translateY: [-900, 0], duration: 2500, delay: 100 }"
      >
        <img src="./assets/images/coffee-real.png" alt="coffee" />
      </figure>
      <figure
        v-anime="{ opacity: [0, 1], translateY: [-900, 0], duration: 2000, delay: 800 }"
        class="notepad"
      >
        <img src="./assets/images/notepad.png" alt="notepad" />
      </figure>
    </div>

    <div @click="changeBg" class="newPage cursor-pointer">
      <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- <div class='about col-span-3'>

    </div>

    <p class='pics-by'>Ben Kolde - laptop image</p>
    <p class='pics-by'>Oscar Ivan Esquivel Arteaga - mouse image</p>
    <p class='pics-by'>Jeremy Yap - coffee image</p>
    <p class='pics-by'>Ibrahim Rifath - notepad image</p>-->
  </div>
</template>

<script>
import Drip from "./components/Drip";
export default {
  name: "App",
  data() {
    return {
      path: "",
      clickedYet: false,
      timeline: "",
      bgAnimation: "",
      animDirection: "normal",
      bgChange: false,
      bg: {
        svg1_col1: "#ffb75e",
        svg1_col2: "#ed8f03"
      }
    };
  },

  methods: {
    enterFirst(el, done) {
      this.$anime({
        targets: "#first",
        d: [
          {
            value:
              "m -67.914066,-36.99575 c 144.20161,144.68936 72.737714,229.19037 329.975556,182.8637 186.48076,-93.59733 124.14214,-72.56923 353.32275,36.56468 47.86511,52.36998 240.32864,54.93661 322.20571,-7.13599 402.30525,-304.99543 532.60075,48.9761 711.27985,1.56666 325.9688,-35.61402 147.4992,-106.581865 369.1258,-221.914039 z"
          },
          {
            value:
              "M -67.914066,-36.99575 C 76.287544,107.69361 -102.43412,2281.7349 154.80372,2235.4082 c 186.48076,-93.5973 227.4274,-1210.6933 456.60801,-1101.5594 47.86511,52.37 377.38024,362.8061 459.25727,300.7335 402.3053,-304.9954 520.6833,11.2373 699.3624,-36.1722 325.9688,-35.614 26.3376,-1328.128665 247.9642,-1443.460839 z"
          }
        ],
        translateY: [-600, 0],
        easing: "easeInQuad",
        opacity: 1,
        duration: 1200,
        complete: done
      });
      this.$anime({
        targets: ".first-svg",
        opacity: 1,
        duration: 2000,
        complete: done
      });
    },

    leaveFirst(el, done) {
      this.$anime({
        targets: "#first",
        translateY: -1600,
        easing: "easeInQuad",
        opacity: 0,
        duration: 2000,
        complete: done
      });
    },

    changeBg() {
      this.bgChange = !this.bgChange;

      if (this.clickedYet) {
        this.bg.svg1_col1 =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.bg.svg1_col2 =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      } else {
        this.clickedYet = true;
      }

      this.$anime({
        targets: "p, .letter, figure",
        opacity: [1, 0],
        translateY: [0, 800],
        delay: (el, i) => i * 100
      });
    }
  },

  components: {
    Drip
  },

  mounted() {
    this.$anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: ".letter",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (el, i) => i * 100
      });
  },

  created() {}
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  //defines what 1rem is 10px because 10px/16px = 62.5%,
  //if this were 100% font-size, then 1rem would be 16px
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(./assets/images/email-pattern.png);
}

.newPage {
  position: absolute;
  right: 20%;
  bottom: 11%;

  svg {
    fill: blue;
  }
}

svg {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

svg.lineDraw {
  width: 45rem;
}

#movement {
  width: 5rem;
  height: 5rem;
}

.hero-section {
  top: 0;
  position: absolute;
  width: 100%;
  height: 80vh;

  figure.me {
    position: absolute;
    bottom: -2%;
    right: 11%;
    z-index: 4;

    img {
      transform: scale(0.95);
    }
  }
  figure.laptop {
    position: absolute;
    bottom: -9rem;
    left: 32%;
    width: 46rem;
    height: 53rem;
    z-index: 3;

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.15);
    }
  }
  figure.mouse {
    position: absolute;
    top: 6rem;
    right: 7%;
    width: 25rem;
    height: 25rem;
    z-index: 3;

    img {
      width: 100%;
      height: 100%;
    }
  }
  figure.coffee {
    position: absolute;
    top: -1rem;
    right: 37%;
    width: 25rem;
    height: 25rem;
    z-index: 3;

    img {
      width: 100%;
      height: 100%;
    }
  }
  figure.notepad {
    position: absolute;
    bottom: -5rem;
    right: 2%;
    width: 43rem;
    height: 28rem;
    z-index: 3;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.about {
  height: 50rem;
}
</style>

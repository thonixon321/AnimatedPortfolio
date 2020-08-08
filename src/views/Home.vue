<template>
  <div>
    <div class="hero-section text-gray-300">

      <svg
        class="curvedSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1320 500"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(144, 205, 244)"
          fill-opacity="1"
        >
          <animate
            attributeName="d"
            values="
          M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500;
          M0,100 C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320 500 L0 500;
          M0,192 C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320 500 L0 500;
          M0,292 C220,292,440,100,660,100 C880,100,1100,292,1320,292 L1320 500 L0 500;
          M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500
        "
            keyTimes="0; 0.25; 0.5; 0.75; 1"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <div class="title-area z-50 ">
        <div class="text-6xl hello-sect flex justify-center">
          <p v-anime="{ opacity: [0, 1], translateY: [-30, 0], duration: 2500, delay: 2100 }">Hello</p>
          <p
            v-anime="{ opacity: [0, 1], translateY: [-30, 0], duration: 2500, delay: 2400 }"
            class="mx-3"
          >there!</p>
          <p
            class="ml-2"
            v-anime="{ opacity: [0, 1], translateY: [-30, 0], duration: 2500, delay: 2700 }"
          >I'm</p>
        </div>
        <div v-anime="{ opacity: [0, 1], scale: [0, 1], duration: 5000, delay: 3100 }">
          <Name />
        </div>
        <div class="text-4xl hello-sect flex justify-center">
          <p v-anime="{ opacity: [0, 1], translateY: [30, 0], duration: 2500, delay: 2900 }">Jr. Front-end</p>
          <p
            v-anime="{ opacity: [0, 1], translateY: [30, 0], duration: 2500, delay: 3100 }"
            class="mx-2"
          >Web</p>
          <p v-anime="{ opacity: [0, 1], translateY: [30, 0], duration: 2500, delay: 3300 }">Developer</p>
        </div>
      </div>

      <div class='figure-area'>
        <figure
          id="me"
          class="me"
          v-anime="{ opacity: [0, 1], scale: [0, 1], rotate: '1turn', duration: 7500, delay: 1000 }"
        >
          <img
            src="../assets/images/me_in_phone-cut.png"
            alt="Thomas in phone"
          />
        </figure>
        <figure
          v-anime="{ opacity: [0, 1], translateY: [-220, 0], translateX: [500, 0], duration: 6500, delay: 2200 }"
          class="laptop"
        >
          <img
            src="../assets/images/laptop.png"
            alt="Laptop"
          />
        </figure>
        <figure
          class="mouse"
          v-anime="{ opacity: [0, 1], translateY: [400, 0], translateX: [-300, 0], duration: 6500, delay: 2200 }"
        >
          <img
            src="../assets/images/mouse.png"
            alt="Mouse"
          />
        </figure>
        <figure
          class="coffee"
          v-anime="{ opacity: [0, 1], translateY: [300, 0], translateX: [300, 0], duration: 6500, delay: 2200 }"
        >
          <img
            src="../assets/images/coffee-real.png"
            alt="coffee"
          />
        </figure>
        <figure
          v-anime="{ opacity: [0, 1], translateY: [-300, 0], translateX: [-360, 0], duration: 6500, delay: 2200 }"
          class="notepad"
        >
          <img
            src="../assets/images/notepad.png"
            alt="notepad"
          />
        </figure>
      </div>
    </div>
    <div class='about-section bg-blue-300'>
      <h1 class="text-huge text-gray-800 container text-center mx-auto">Cards</h1>
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
import Name from "../components/Name";
export default {
  name: "App",

  methods: {},

  components: {
    Name,
  },

  created() {},
};
</script>

<style lang="scss">
</style>
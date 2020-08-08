<template>

  <div class="projects">
    <Drip :bgColors="bg" />
    <h1 class="z-50">This is a projects page</h1>
  </div>

</template>

<script>
import Drip from "../components/Drip";

export default {
  name: "Projects",
  data() {
    return {
      bg: {
        svg1_col1: "#ffb75e",
        svg1_col2: "#ed8f03",
        svg2_col1: "#c21500",
        svg2_col2: "#ffc500",
        svg3_col1: "#c21500",
        svg3_col2: "#ffc500",
      },
    };
  },

  methods: {},

  mounted() {},

  components: {
    Drip,
  },
};
</script>
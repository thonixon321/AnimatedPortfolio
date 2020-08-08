<template>
  <div class="liquid">
    <div class="first-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <linearGradient id="linear-gradient">
            <stop
              offset="0"
              :stop-color="bgColors.svg1_col1"
            />
            <stop
              offset="1"
              :stop-color="bgColors.svg1_col2"
            />
          </linearGradient>
        </defs>
        <filter id="f4">
          <feOffset
            result="offOut"
            in="SourceGraphic"
            dx="0"
            dy="20"
          />
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
          />
          <feGaussianBlur
            result="blurOut"
            in="matrixOut"
            stdDeviation="30"
          />
          <feBlend
            in="SourceGraphic"
            in2="blurOut"
            mode="normal"
          />
        </filter>
        <path
          id="first"
          fill="url(#linear-gradient)"
          filter="url(#f4)"
          d="m -67.914066,-1.99575 c 144.20161,144.68936 72.737714,229.19037 329.975556,182.8637 186.48076,-93.59733 124.14214,-72.56923 353.32275,36.56468 47.86511,52.36998 240.32864,54.93661 322.20571,-7.13599 402.30525,-304.99543 532.60075,48.9761 711.27985,1.56666 325.9688,-35.61402 147.4992,-106.581865 369.1258,-221.914039 z"
        />
      </svg>
    </div>
    <div class="second-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <linearGradient id="linear-gradient">
            <stop
              offset="0"
              :stop-color="bgColors.svg2_col1"
            />
            <stop
              offset="1"
              :stop-color="bgColors.svg2_col2"
            />
          </linearGradient>
        </defs>
        <path
          id="second"
          fill="url(#linear-gradient)"
          filter="url(#f4)"
          d="m -67.914066,-1.99575 c 144.20161,144.68936 72.737714,229.19037 329.975556,182.8637 186.48076,-93.59733 124.14214,-72.56923 353.32275,36.56468 47.86511,52.36998 240.32864,54.93661 322.20571,-7.13599 402.30525,-304.99543 532.60075,48.9761 711.27985,1.56666 325.9688,-35.61402 147.4992,-106.581865 369.1258,-221.914039 z"
        />
      </svg>
    </div>
    <div class="third-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <linearGradient id="linear-gradient">
            <stop
              offset="0"
              :stop-color="bgColors.svg3_col1"
            />
            <stop
              offset="1"
              :stop-color="bgColors.svg3_col2"
            />
          </linearGradient>
        </defs>
        <path
          id="third"
          fill="url(#linear-gradient)"
          filter="url(#f4)"
          d="m -67.914066,-1.99575 c 144.20161,144.68936 72.737714,229.19037 329.975556,182.8637 186.48076,-93.59733 124.14214,-72.56923 353.32275,36.56468 47.86511,52.36998 240.32864,54.93661 322.20571,-7.13599 402.30525,-304.99543 532.60075,48.9761 711.27985,1.56666 325.9688,-35.61402 147.4992,-106.581865 369.1258,-221.914039 z"
        />
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  name: "Drip",
  props: {
    bgColors: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style>
.liquid {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
}
</style>
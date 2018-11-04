<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       :viewBox="viewBox"
       :aria-labelledby="iconName"
       role="presentation"
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
  export default {
    props: {
      iconName: {
        type: String,
        default: 'box',
      },
      viewBox: {
        type: String,
        default: '0 0 35 35',
      },
      width: {
        type: [Number, String],
        default: 22,
      },
      height: {
        type: [Number, String],
        default: 22,
      },
    },
  };
</script>

<style lang="scss" scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
    fill: $font-color;
    transition: .2s ease-out;
  }
</style>

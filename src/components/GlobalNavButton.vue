<template>
  <button
      @mouseover="onMouseover"
      @mouseleave="onMouseleave"
      @click="onClick"
      :class="{ hover: isHover, click: isClick }"
  >{{ title }}</button>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class GlobalNavButton extends Vue {
    @Prop() private title!: string;

    private isHover: boolean = false;
    private isClick: boolean = false;

    public onMouseover(): void {
      this.isHover = true;
    }

    public onMouseleave(): void {
      this.isHover = false;
    }

    public onClick(): void {
      this.isHover = false;
      this.isClick = true;
      setTimeout(() => {
        this.isClick = false;
      }, 1000);
      this.$router.push(this.title);
    }

  }

</script>

<style lang="scss" scoped>
  button {
    display: inline-block;
    color: $font-color;
    text-transform: uppercase;
    line-height: 2em;
    font-weight: $bold;
    font-size: 2rem;
    font-family: $font-family-h;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    border-radius: 2rem;
    position: relative;
    background: $body-color;
    z-index: 5;
    &.hover::before {
      content: '';
      display: block;
      position: absolute;
      width: 200%;
      height: 200%;
      z-index: -1;
      top: -50%;
      left: -50%;
      background-position: center center;
      background-repeat: no-repeat;
      animation: sparkle .8s steps(1) infinite;
    }
    &.click::before {
      content: '';
      display: block;
      position: absolute;
      width: 200%;
      height: 200%;
      z-index: -1;
      top: -50%;
      left: -50%;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url('../assets/images/spark-1.svg');
      animation: scaleup .3s forwards;
    }
  }
  @keyframes sparkle {
    0% {
      background-image: url('../assets/images/spark-1.svg');
    }
    50% {
      background-image: url('../assets/images/spark-2.svg');
    }
  }

  @keyframes scaleup {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }

</style>

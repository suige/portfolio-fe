<template>
  <div :class="{animate: isActive}">
    <img src="@/assets/images/logo.svg" alt="Koari">
    <div class="title">
      <span>K</span>
      <span>a</span>
      <span>o</span>
      <span>r</span>
      <span>i</span>
      <span>.</span>
      <span>S</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class GlobalNavigation extends Vue {
    private isActive: boolean = false;

    private mounted(): void {
      this.toggleAnimate();
    }

    private toggleAnimate(): void {
      this.isActive = !this.isActive;
      setTimeout(this.toggleAnimate, 12000);
    }
  }

</script>

<style lang="scss" scoped>
  div {
    position: relative;
  }
  .title {
    display: inline-block;
    padding-left: .5em;
    text-transform: uppercase;
    color: $font-color;
  }
  img {
    display: inline-block;
    width: auto;
    height: 4rem;
    vertical-align: bottom;
    animation: rock 1s linear alternate infinite;
  }
  // KAORI.S
  @for $i from 1 through 8 {
    .animate span:nth-child(#{$i}) {
      display: inline-block;
      animation: spin 1s linear 0.3s*$i;
    }
  }

  @keyframes rock {
    0% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(1turn);
    }
  }
</style>

<template>
  <div class="bg-stars">
    <div v-for="i in 10">★</div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class BackgroundStarts extends Vue {}
</script>

<style lang="scss" scss>
  .bg-stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    div {
      position: absolute;
      display: inline-block;
      color: $main-color;
      font-size: 4rem;
      animation: fadeout ease-out 2s alternate infinite;

      &:nth-child(1) {
        left: 10px;
        top: 30px;
        animation-duration: 1.5s;
      }
      &:nth-child(2) {
        left: 65%;
        top: 3%;
        animation-duration: 3s;
      }
      &:nth-child(3) {
        left: 6%;
        bottom: 30px;
        animation-duration: 1s;
      }
      &:nth-child(4) {
        left: 20%;
        bottom: 10%;
        animation-duration: 2s;
      }
      &:nth-child(5) {
        left: 50%;
        bottom: 3%;
        animation-duration: 3s;
      }
      &:nth-child(6) {
        left: 80%;
        bottom: 10%;
        animation-duration: 1s;
      }
      &:nth-child(7) {
        left: 60%;
        bottom: 30%;
        animation-duration: 2s;
      }
      &:nth-child(8) {
        left: 70%;
        bottom: 45%;
        animation-duration: 1.3s;
      }
      &:nth-child(9) {
        right: 6%;
        top: 10%;
        animation-duration: 2s;
      }
      &:nth-child(10) {
        right: 20%;
        top: 25%;
        animation-duration: 1.6s;
      }

    }
  }

  @keyframes falldown {
    0% {
      transform: translateY(-5rem);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  @keyframes fadeout {
    0% {
      opacity: 0;
    }
    100% {
      opacity: .2;
    }
  }
</style>

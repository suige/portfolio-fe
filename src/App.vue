<template>
  <div id="app">
    <GlobalNavigation></GlobalNavigation>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
    <footer>
      <SnsNavigation></SnsNavigation>
      <p>kaori suigetsu</p>
    </footer>
    <FirstLoading></FirstLoading>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import FirstLoading from '@/components/FirstLoading.vue';
  import GlobalNavigation from '@/components/GlobalNavigation.vue';
  import SnsNavigation from '@/components/SnsNavigation.vue';

  @Component({
    components: {
      FirstLoading,
      GlobalNavigation,
      SnsNavigation,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss" scoped>
  #app {
    font-family: $font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $font-color;
    min-height: 100vh;
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 12vw;
      max-width: 100px;
      height: 100%;
      background: $font-color;
      position: absolute;
      top:0;
      right: 0;
      pointer-events: none;
      z-index: -1;
    }
  }
  footer {
    margin: 0;
    padding: $spacer 0;
    @include pc-layout {
      position: fixed;
      right: 0;
      top: 40%;
      text-align: right;
    }
    p {
      @include pc-layout {
        transform-origin: 50% 50%;
        transform: rotateZ(90deg) translateX(5rem);
        display: inline-block;
        color: $body-color;
      }
      text-align: center;
      margin: 0;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  }

  .page-enter {
    transform: translateX(-100%);
  }
  .page-enter-active {
    transition: all ease-out .7s;
  }
  .page-leave-active {
    &::before {
      content: '';
      display: block;
      width: 100vw;
      height: 100%;
      background-color: $font-color;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 11;
      animation: slide .5s ease-out forwards;
    }
    transition: all .5s ease-out .4s;
  }
  .page-leave-to {
    transform: translateX(120%);
  }

  @keyframes slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

</style>

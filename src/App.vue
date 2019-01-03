<template>
  <div id="app">
    <GlobalNavigation></GlobalNavigation>
    <div class="container">
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </div>
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
  .container {
    max-width: 1200px;
    background-color: $body-color;
    border-left: 4vw solid $font-color;
    @include pc-layout {
      padding: $spacer*3 12vw $spacer*3 $spacer*5;
      margin-right: 12vw;
    }
    @include sp-layout {
      padding: $spacer*2 $width-space-sp+1 $spacer*2 $width-space-sp;
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
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>

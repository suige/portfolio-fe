<template>
  <div id="app">
    <GlobalNavigation></GlobalNavigation>
    <SnsNavigation></SnsNavigation>
    <transition name="component-fade" mode="out-in">
      <div class="container">
        <router-view/>
      </div>
    </transition>
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

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.8rem;
    background-color: $body-color;
  }
  p {
    line-height: 1.6em;
  }
  h1, h2, h3, h4 {
    font-family: $font-family-h;
    font-weight: 700;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: $font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font-color;
  }
  .container {
    padding: 0 $spacer*5;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .5s
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }

</style>

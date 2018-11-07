<template>
  <div id="app">
    <GlobalNavigation></GlobalNavigation>
    <SnsNavigation></SnsNavigation>
    <div class="container">
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </div>
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
    font-size: 2rem;
    background-color: $body-color;
  }
  p {
    line-height: 1.6em;
  }
  h1, h2, h3, h4 {
    font-family: $font-family-h;
    font-weight: 700;
  }
  h1 {
    font-size: 4.6rem;
    margin: 1em 0;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: $link-color;
    font-weight: $bold;
    text-decoration: none;
    &:hover {
      background-color: lighten($link-color, 40%);
    }
  }

  #app {
    font-family: $font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $font-color;
  }
  .container {
    padding: 0 $spacer*5;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>

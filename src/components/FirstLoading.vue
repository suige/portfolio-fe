<template>
  <transition name="router">
    <div class="overlay" v-if="loading">ローディング用の SVG とか</div>
  </transition>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
    get loading() { return this.$store.state.loading; }
  }
</script>

<style lang="scss" scoped>
  .overlay {
    position: absolute;
    background: rgba(220, 220, 220, 1);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .router-enter-active{
    transition: all .4s;
  }
  .router-leave-active {
    transition: all .8s ease 0.4s;
  }
  .router-enter,.router-leave-to {
    opacity: 0;
  }</style>

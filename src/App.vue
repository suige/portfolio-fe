<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
    <FirstLoading></FirstLoading>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import FirstLoading from '@/components/FirstLoading.vue';

  @Component({
    components: {
      FirstLoading,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.component-fade-enter-active, .component-fade-leave-active {
  -webkit-animation: ldt-vortex-out 1s infinite;
  animation: ldt-vortex-out 1s infinite;
  animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
}
/*.component-fade-enter, .component-fade-leave-to*/
  /*opacity: 0;*/
/*}*/

@keyframes ldt-vortex-out {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(1800deg) scale(3);
    transform: rotate(1800deg) scale(3);
    opacity: 0;
  }
}

</style>

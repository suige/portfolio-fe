<template>
  <div id="app">
    <nav id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
        <li><router-link to="/about">AboutMe</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <ul class="sns-link">
      <li><a href="https://www.linkedin.com/in/suige" target="_blank">
        <img src="./assets/images/linkedin.svg" alt="linkedin">
      </a></li>
      <li><a href="https://codepen.io/suige/" target="_blank">
        <img src="./assets/images/codepen.svg" alt="codepen">
      </a></li>
      <li><a href="https://github.com/suige" target="_blank">
        <img src="./assets/images/github.svg" alt="github">
      </a></li>
    </ul>
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
  transition: opacity .5s
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

</style>

<template>
  <nav id="nav">
    <ul>
      <li class="logo"><router-link to="/"><logo></logo></router-link></li>
      <li><router-link to="/works">Works</router-link></li>
      <li><router-link to="/about">AboutMe</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Logo from '@/components/Logo.vue';

  @Component({
    components: {
      Logo,
    },
  })
  export default class GlobalNavigation extends Vue {}
</script>

<style lang="scss" scoped>
  #nav {
    padding: $spacer*3 $spacer*5;
    font-family: $font-family-h;
    width: 100%;
    ul {
      display: flex;
      align-items: baseline;
    }
    li {
      flex: 0 1 auto;
      a {
        display: inline-block;
        font-weight: bold;
        color: $font-color;
        text-decoration: none;
        text-transform: uppercase;
        line-height: 2em;
        transition: color .2s ease-out;
        &:hover {
          color: $link-color;
        }
      }
      &.logo {
        flex: 1 0 auto;
        text-align: left;
        a {
          position: relative;
          padding-left: 2.5em;
        }
      }
      &:not(.logo) {
        padding: 0 .5em;
        a {
          &.router-link-exact-active {
            color: $link-color;
          }
        }
      }
    }
  }
</style>

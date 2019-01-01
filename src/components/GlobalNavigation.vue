<template>
  <nav id="nav">
    <ul>
      <li class="logo"><router-link to="/"><logo/></router-link></li>
      <li><button @mouseover="onMouseover" @mouseleave="onMouseleave">Works</button></li>
      <li><button @mouseover="onMouseover" @mouseleave="onMouseleave">AboutMe</button></li>
      <li><button @mouseover="onMouseover" @mouseleave="onMouseleave">Contact</button></li>
    </ul>
    <div class="navBackground" v-show="isMouseover"></div>
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
  export default class GlobalNavigation extends Vue {

    private isMouseover: boolean = false;
    public onMouseover(): void {
      this.isMouseover = true;
    }
    public onMouseleave(): void {
      this.isMouseover = false;
    }
  }
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
      &.logo {
        flex: 1 0 auto;
        text-align: left;
      }
      &:not(.logo) {
        padding: 0 .5em;
      }
    }
  }
  button {
    display: inline-block;
    font-weight: bold;
    color: $font-color;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 2em;
    transition: color .2s ease-out;
    border: none;
    font-weight: $bold;
    font-size: 2rem;
    font-family: $font-family-h;
    cursor: pointer;
    outline: none;
    background: none;
    position: relative;
    &:hover {
      color: $link-color;
      background: $body-color;
      z-index: 101;
    }
  }
  .navBackground {
    background: lighten($sub-color, 40%);
    opacity: .3;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }
</style>

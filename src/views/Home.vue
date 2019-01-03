<template>
  <section id="hero">
    <h1>I'm a Front-End Developer.</h1>
    <p class="sub-title">Animation Lover <span>(๑´ڡ`๑)</span></p>
    <p>Kaori has experience of 3 years+ in web development. Kaori likes <strong>CSS animation</strong> and <strong>Vue.js</strong>. Kaori is currently studying SVG, Canvas and advanced CSS animation to produce the amazing interactional web site for clients. </p>
    <p>If you get interested me, please <a href="#contact">contact me</a>.</P>
  </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  h1 {
    line-height: 1.2em;
    margin-bottom: $spacer;
    @include pc-layout {
      font-size: 5.4vw;
    }
    span {
      font-size: .6em;
    }
  }
  .sub-title {
    color: $main-color;
    margin-top: 0;
    font-size: 3.6rem;
    letter-spacing: 2px;
    span {
      letter-spacing: 0;
      font-size: .7em;
      white-space: nowrap;
    }
  }
</style>

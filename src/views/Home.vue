<template>
  <section id="hero">
    <h1>Hello, I am a Front-End Developer<br>Based in Vancouver <span>(๑´ڡ`๑)</span></h1>
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
    font-size: 5.6rem;
    span {
      font-size: .6em;
    }
  }
</style>

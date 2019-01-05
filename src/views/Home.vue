<template>
  <Container>
    <section id="hero">
      <h1><span v-for="t in title" :class="[t === ' ' ? 'space' : '']">{{t}}</span></h1>
      <p class="sub-title">Animation Lover <span>(๑´ڡ`๑)</span></p>
      <p>Kaori has experience of 3 years+ in web development. Kaori likes <strong>CSS animation</strong> and <strong>Vue.js</strong>. Kaori is currently studying SVG, Canvas and advanced CSS animation to produce the amazing interactional web site for clients. </p>
      <p>If you get interested me, please <a href="#contact">contact me</a>.</P>
    </section>
  </Container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/Container.vue';

@Component({
  components: {
    Container,
  },
})
export default class Home extends Vue {
  public title: string = 'Hi. I\'m a Front-End Developer.';
}
</script>

<style lang="scss" scoped>
  h1 {
    color: $body-color;
    line-height: 1.2em;
    letter-spacing: 2px;
    margin-bottom: $spacer;
    text-shadow: 1px 1px 0 $font-color, -1px 1px 0 $font-color, 1px -1px 0 $font-color, -1px -1px 0 $font-color, 5px 3px 0 $font-color;
    @include pc-layout {
      font-size: 5.4vw;
      white-space: nowrap;
    }
    span {
      display: inline-block;
      &.space {
        width: .3em;
      }
    }
    //TODO: add some design
    span:nth-child(1) {
      transform: rotate(-3deg);
    }
  }
  .sub-title {
    font-family: $font-family-h;
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

<template>
  <Container>
  <section id="contact">
    <h1>Contact Me</h1>
    <p>If you want to ask something or just say hello, please message me.</p>
    <a href="mailto:suigetsukaori@gmail.com" class="email">suigetsukaori@gmail.com</a>
  </section>
    <div class="image-wrapper">
      <icon-base icon-name="steamboat" view-box="0 0 2676 3002"><steamboat/></icon-base>
    </div>
  </Container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Container from '@/components/Container.vue';
  import IconBase from '@/components/IconBase.vue';
  import Steamboat from '@/components/icons/Steamboat.vue';

  @Component({
    components: {
      Container,
      IconBase,
      Steamboat,
    },
  })
  export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>

.email {
  font-family: $font-family-h;
  font-weight: $font-bold;
  font-size: 1.3em;
}

.image-wrapper {
  width: 80vw;
  max-width: 700px;
  svg {
    width: 100%;
    height: auto;
  }
}
</style>


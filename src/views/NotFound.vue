<template>
  <Container>
    <section id="notfound">
      <h1>404</h1>
      <p>Sorry, the page you are looking for cannot be found.</p>
    </section>
  </Container>
</template>

<script>
  import {Component, Vue} from 'vue-property-decorator';
  import Container from '@/components/Container.vue';

  @Component({
    components: {
      Container,
    },
  })
  export default class NotFound extends Vue {}
</script>


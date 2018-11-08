<template>
  <div class="about">
    <h1>Kaori is ...</h1>
    <skills></skills>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Skills from '@/components/Skills.vue';

  @Component({
    components: {
      Skills,
    },
  })
  export default class About extends Vue {}
</script>

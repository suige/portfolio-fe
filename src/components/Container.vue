<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Container extends Vue {}
</script>

<style lang="scss">
  .container {
    max-width: 1200px;
    background-color: $body-color;
    border-left: 4vw solid $font-color;
    position: relative;
    @include pc-layout {
      padding: $spacer*3 12vw $spacer*3 $spacer*5;
      margin-right: 12vw;
    }
    @include sp-layout {
      padding: $spacer*2 $width-space-sp+1 $spacer*2 $width-space-sp;
    }
  }
</style>

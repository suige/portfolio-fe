<template>
  <div>
    <nav id="nav">
      <router-link to="/"><logo/></router-link>
      <ul>
        <li>
          <GlobalNavButton title="works"/>
        </li>
        <li>
          <GlobalNavButton title="contact"/>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Logo from '@/components/Logo.vue';
  import GlobalNavButton from '@/components/GlobalNavButton.vue';

  @Component({
    components: {
      Logo,
      GlobalNavButton,
    },
  })
  export default class GlobalNavigation extends Vue {
  }
</script>

<style lang="scss" scoped>
  #nav {
    font-family: $font-family-h;
    width: 100%;
    padding: $spacer*3 $spacer*5;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    @include sp-layout {
      padding: $spacer*3 $width-space-sp 0;
    }

    a:hover {
      background: none;
    }

    ul {
      display: flex;
      align-items: baseline;
      @include pc-layout {
        flex-direction: row;
      }
      @include sp-layout {
        flex-direction: column;
        align-items: flex-end;
      }
    }

    li {
      flex: 0 1 auto;
      margin-bottom: 10px;

      @include pc-layout {
        padding: 0 .5em;
      }
    }
  }
</style>

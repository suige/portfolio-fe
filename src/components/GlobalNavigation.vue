<template>
  <div>
    <nav id="nav">
      <router-link to="/"><logo/></router-link>
      <ul>
        <li>
          <button @click="onClick('works')">Works</button>
        </li>
        <!--<li>-->
          <!--<button @mouseover="onMouseover" @mouseleave="onMouseleave" @click="onClick('about')">AboutMe</button>-->
        <!--</li>-->
        <li>
          <button @click="onClick('contact')">Contact</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Logo from '@/components/Logo.vue';

  @Component({
    components: {
      Logo,
    },
  })
  export default class GlobalNavigation extends Vue {

    public onClick(name: string): void {
      this.$router.push(name);
    }
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

  button {
    display: inline-block;
    color: $font-color;
    text-transform: uppercase;
    line-height: 2em;
    font-weight: $bold;
    font-size: 2rem;
    font-family: $font-family-h;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    border-radius: 2rem;
    position: relative;
    background: $body-color;

    &:hover {
      z-index: 101;
    }
  }
</style>

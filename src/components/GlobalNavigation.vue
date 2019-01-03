<template>
  <div>
    <nav id="nav">
      <router-link to="/"><logo/></router-link>
      <ul>
        <li>
          <button @mouseover="onMouseover" @mouseleave="onMouseleave" @click="onClick('works')">Works</button>
        </li>
        <li>
          <button @mouseover="onMouseover" @mouseleave="onMouseleave" @click="onClick('about')">AboutMe</button>
        </li>
        <li>
          <button @mouseover="onMouseover" @mouseleave="onMouseleave" @click="onClick('contact')">Contact</button>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="navBackground" v-show="isMouseover"></div>
    </transition>
    <transition name="fade-eye">
      <div class="eyes" v-show="isMouseover">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
    </transition>
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

    private isMouseover: boolean = false;

    public onMouseover(): void {
      this.isMouseover = true;
    }

    public onMouseleave(): void {
      this.isMouseover = false;
    }

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

    @include sp-layout {
      padding: $spacer*3 $width-space-sp 0;
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

  .navBackground {
    opacity: .9;
    background: $font-color;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .eyes {
    position: fixed;
    bottom: 100px;
    left: 100px;
    z-index: 101;
  }

  .eye {
    width: 30px;
    height: 42px;
    border-radius: 20px;
    background: #fff;
    display: inline-block;
    margin: 0 4px;
    position: relative;
    animation: blink 6s linear infinite;

    &::after {
      content: '';
      display: block;
      width: 15px;
      height: 20px;
      border-radius: 10px;
      background: $font-color;
      position: absolute;
      animation: eye 5s linear 1s infinite alternate;
    }
  }

  @keyframes blink {
    0% {
      transform: scale(0);
    }
    5% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }

  }

  @keyframes eye {
    0% {
      top: 10px;
      left: 0;
    }
    5% {
      top: 10px;
      left: 15px;
    }
    20% {
      top: 10px;
      left: 15px;
    }
    25% {
      top: 0;
      left: 15px;
    }
    50% {
      top: 0;
      left: 15px;
    }
    55% {
      top: 10px;
      left: 15px;
    }
    80% {
      top: 10px;
      left: 15px;
    }
    85% {
      top: 10px;
      left: 0;
    }
    100% {
      top: 10px;
      left: 0;
    }
  }

  .fade-enter-active {
    transition: opacity .8s;
  }

  .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-eye-enter-active {
    transition: opacity .4s;
    transition-delay: 2s;
  }

  .fade-eye-leave-active {
    transition: opacity .1s;
  }

  .fade-eye-enter, .fade-eye-leave-to {
    opacity: 0;
  }
</style>

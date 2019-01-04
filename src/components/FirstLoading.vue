<template>
  <transition name="loading">
    <div class="overlay" v-if="isLoading">
      <div class="border">
        <p>Welcome to my website.</p>
      </div>
      <div class="rabbit">
        <icon-base icon-name="logo" view-box="0 0 32 32"><icon-logo/></icon-base>
      </div>
      <div class="wall-1"></div>
      <div class="wall-2"></div>
      <div class="wall-3"></div>
    </div>
  </transition>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import IconBase from '@/components/IconBase.vue';
  import IconLogo from '@/components/icons/IconLogo.vue';

  @Component({
    components: {
      IconBase,
      IconLogo,
    },
  })
  export default class FirstLoading extends Vue {
    public isLoading: boolean = true;

    private mounted(): void {
      setTimeout(() => { this.isLoading = false; }, 5500);
    }
  }
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: $body-color;
    animation: fadeout 1s 4.5s forwards;
  }

  .wall-1, .wall-2, .wall-3 {
    background-color: $font-color;
    height: calc(100% / 3);
    width: 0;
  }

  .wall-1 {
    margin-left: auto;
    animation: slide1 .5s 1s forwards;
  }

  .wall-2 {
    animation: slide1 .5s 1.3s forwards;
  }

  .wall-3 {
    margin-left: auto;
    animation: slide1 .5s 1.6s forwards;
  }

  .border {
    width: 94%;
    height: 94%;
    margin: 2%;
    position: absolute;
    left: 0;
    right: 0;
    border: 5px dashed $body-color;
    p {
      margin: 6vh auto;
      text-align: center;
      text-transform: uppercase;
      font-family: $font-family-h;
      font-size: 3.4rem;
      color: $body-color;
    }
  }

  .rabbit {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;

    svg {
      width: 120px;
      height: auto;
      animation: shake .1s 6 .3s alternate, appear 1s 2.4s forwards, big 1s 4s forwards;
    }
  }

  @keyframes slide1 {
    100% {
      width: 100vw;
    }
  }

  @keyframes slide1 {
    100% {
      width: 100vw;
    }
  }

  @keyframes shake {
    0% {
      transform: rotateZ(-5deg);
    }
    100% {
      transform: rotateZ(5deg);
    }
  }

  @keyframes appear {
    0% {
      fill: $body-color;
      transform: scale(0);
    }
    40% {
      fill: $body-color;
      transform: scale(1.3);
    }
    100% {
      fill: $body-color;
      transform: scale(1);
    }
  }

  @keyframes big {
    50% {
      width: 100vmax;
    }
    100% {
      width: 100vmax;
      transform: scale(3);
    }
  }

  @keyframes fadeout {
    100% {
      opacity: 0;
    }
  }

  .loading-enter-active, .loading-leave-active {
    transition: all .2s;
  }

  .loading-enter, .loading-leave-to {
    opacity: 0;
  }

</style>

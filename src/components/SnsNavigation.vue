<template>
  <ul class="sns-link">
    <li><a href="https://www.linkedin.com/in/suige" target="_blank">
      <icon-base icon-name="linkedin" view-box="0 0 35 35"><icon-linkedin/></icon-base>
    </a></li>
    <li><a href="https://codepen.io/suige/" target="_blank">
      <icon-base icon-name="codepen" view-box="0 0 36 36"><icon-codepen/></icon-base>
    </a></li>
    <li><a href="https://github.com/suige" target="_blank">
      <icon-base icon-name="github" view-box="0 0 36.91 36"><icon-github/></icon-base>
    </a></li>
  </ul>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import IconBase from '@/components/IconBase.vue';
  import IconLinkedin from '@/components/icons/IconLinkedin.vue';
  import IconCodepen from '@/components/icons/IconCodepen.vue';
  import IconGithub from '@/components/icons/IconGithub.vue';

  @Component({
    components: {
      IconBase,
      IconLinkedin,
      IconCodepen,
      IconGithub,
    },
  })
  export default class SnsNavigation extends Vue {}
</script>

<style lang="scss" scoped>
  ul {
    position: fixed;
    right: $spacer;
    top: 40%;
    li {
      margin-bottom: $spacer*2;
      a {
        &:hover {
          background: none;
          svg {
            fill: $link-color;
          }
        }
      }
    }
    img {
      width: 22px;
      height: auto;
    }
  }
</style>

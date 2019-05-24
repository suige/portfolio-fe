<template>
  <Container>
    <section id="works">
      <h1>works</h1>
      <div class="work-list">
        <section v-for="(project, index) in projects" class="work">
          <div class="slider-wrapper">
            <div class="slider" :style="slideTranslateX(index)">
              <div class="slider-image" v-for="image in project.images">
                <img :src="image"/>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>{{ project.name }}</h3>
            <p class="subtitle">{{ project.tech }}</p>
            <p>{{project.description}}</p>
            <div v-if="project.url" class="button-wrapper">
              <a :href=project.url target="_blank" class="button">VIEW LIVE SITE</a>
            </div>
            <div v-if="project.github">
              <a :href=project.github target="_blank" class="button button-github">VIEW REPOSITORY</a>
            </div>
          </div>
          <div class="slider-control">
            <div class="slider-left">
              <button @click="slideLeft(index)" :disabled="project.positionX === 0">
                <svg viewBox="0 0 18 18" role="img" aria-label="前へ" focusable="false">
                  <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                        fill-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div class="slider-right">
              <button @click="slideRight(index)" :disabled="project.positionX === project.images.length-1">
                <svg viewBox="0 0 18 18" role="img" aria-label="次へ" focusable="false">
                  <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                        fill-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

    </section>
  </Container>
</template>

<script>
  import Container from '@/components/Container.vue';

  export default {
    name: 'Works',
    data() {
      return {
        slideWidth: 280,
        projects: [
          {
            id: 'vanquestion',
            images: [
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
            ],
            name: 'vanQuestion',
            url: 'https://google.com/',
            github: 'https://github.com/suige/React-vanQuestion',
            description: 'This is a BBS website for people lived in Vancouver.',
            tech: 'ReactJS, HTML, CSS, UI/UX Design',
            positionX: 0,
          },
          {
            id: 'portfolio-v2',
            images: [
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
            ],
            name: 'My Portfolio with CSS Animation',
            url: 'https://suige.gripics.com/',
            github: 'https://github.com/suige/portfolio-v2',
            description: 'This is one of my portfolio that focus on CSS animation. Especially, loading animation is implimented by only CSS.',
            tech: 'Vue.js, HTML, CSS, All Design',
            positionX: 0,
          },
          {
            id: 'cavancle',
            images: [
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
            ],
            name: 'CAVANCLE',
            url: '',
            description: 'This is a cafe searching website for Japanese living in Vancouver. My roll in this project is mainly to implement website using Vue.js. We discuss the UI design on InVision and adobe XD',
            tech: 'Vue.js, HTML, CSS',
            positionX: 0,
          },
          {
            id: 'my-friends-blog',
            images: [
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
              require('@/assets/images/works/sample.jpg'),
            ],
            name: 'My Friend\'s Blog',
            url: 'https://www.changami.com/',
            description: 'This is a blog created by WordPress based on Sage. My friend likes old-school TV games, so the theme is used 8 bit font and characters.',
            tech: 'WordPress, HTML, CSS, UI Design',
            positionX: 0,
          },
        ],
      };
    },
    components: {
      Container,
    },
    computed: {
      slideTranslateX() {
        return (i) => {
          return `transform: translateX(${(this.slideWidth * this.projects[i].positionX * -1)}px)`;
        };
      },
    },
    methods: {
      slideLeft(i) {
        if (this.projects[i].positionX > 0) {
          this.projects[i].positionX--;
        }
      },
      slideRight(i) {
        if (this.projects.length - 1 > this.projects[i].positionX) {
          this.projects[i].positionX++;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .work-list {
    margin-right: -12vw;
  }

  .work {
    width: 100%;
    margin: 0 0 $spacer*6;
    position: relative;

    .slider-control {
      text-align: right;

      button {
        border: none;
        background-color: $font-color;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        transition: all .2s;

        &:focus, &:active {
          box-shadow: 0 0 0 2px $main-color;
        }

        &:disabled {
          background-color: $main-color;
          opacity: .5;
          cursor: auto;
        }

        svg {
          width: 10px;
          height: 10px;
          fill: $body-color;
        }
      }

      .slider-right, .slider-left {
        display: inline-block;
        margin-left: $spacer;
      }
    }

    .slider-wrapper {
      overflow: hidden;
    }

    .slider {
      padding-left: calc(35% + #{$spacer*4});
      padding-top: $spacer;
      padding-bottom: $spacer;
      white-space: nowrap;
      overflow-x: visible;
      transition: all .2s;

      &::-webkit-scrollbar {
        display: none !important;
      }

      &-image {
        width: 280px;
        margin: 0 $spacer;
        display: inline-block;
      }

      img {
        width: 100%;
        height: auto;
        box-shadow: 0 0 $spacer 1px lighten($main-color, 20%);
      }
    }

    .content {
      width: 35%;
      position: absolute;
      bottom: 20%;
      left: $spacer;
      background-color: $body-color;
      padding: $spacer $spacer*2;

      h3 {
        margin: 0 auto $spacer;
        font-family: $font-family-h;
      }

      .subtitle {
        font-weight: bold;
      }

      p {
        font-size: 0.9em;
        background-color: $body-color;
      }
    }

    .button-wrapper {
      margin: $spacer 0;
    }

    .button {
      background-color: $font-color;
      color: $body-color;
      display: inline-block;
      padding: 2px 1em;
      border-radius: 1em;
      font-family: $font-family-h;
      letter-spacing: 1px;
      font-size: .9em;

      &:hover {
        color: $main-color;
      }
    }
  }

</style>

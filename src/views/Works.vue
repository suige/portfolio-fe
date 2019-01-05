<template>
  <Container>
  <section id="works">
    <h1>works</h1>
    <div class="work-list-card">
      <section v-for="c in comments" class="listcard">
        <img :src="c.url" />
        <div class="text">
          <h3>{{ c.name }}</h3>
          <p>{{ c.tech }}</p>
    <!--          <router-link :to="{ name: 'detail', params: { id: c.id } }" class="btn">DETAIL</router-link> -->
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
      comments: [
        {
          id: 'my-friends-blog',
          url: require('@/assets/images/works/work1.gif'),
          name: 'My Friend\'s Blog',
          tech: 'Design Wordpress Sage HTML CSS3',
        },
        {
          id: 'cavancle',
          url: require('@/assets/images/works/work2.gif'),
          name: 'Vancouver Cafe Search Site',
          tech: 'HTML CSS3 Vue.js',
        },
      ],
    };
  },
    components: {
      Container,
    },
};
</script>

<style lang="scss" scoped>
  .listcard{
    width: 100%;
    max-width: 480px;
    margin: 0 $spacer 30px;
    display: inline-block;
    white-space: normal;
    background-color: #fff;
    padding: $spacer;
    img {
      width: 100%;
      height: auto;
    }
    .text {
      padding: $spacer*3 $spacer;
      h3 {
        margin: 0 auto $spacer;
        font-family: $font-family-h;
      }
      p {
        font-size: 0.9em;
      }
      .btn {
        display: block;
        text-align: center;
      }
    }
  }

</style>

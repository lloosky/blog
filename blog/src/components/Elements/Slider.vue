<template>
<div class="slider">
  <carousel :perPage="1" :navigationEnabled="true" :autoplay="true" :loop="true" :autoplayTimeout="3000" :paginationEnabled="false">
    <slide>
      <div class="post-info">
        <h1>POST TITLE #1</h1>
        <span>september 8, 2020</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
        <button type="button" name="button">read article</button>
      </div>
      <div class="post-photo">
        <div class="photo-shadow">
        </div>
      </div>
    </slide>
    <slide>
      <div class="post-info">
        <h1>POST TITLE #1</h1>
        <span>september 8, 2020</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
        <button type="button" name="button">read article</button>
      </div>
      <div class="post-photo">
        <div class="photo-shadow">
        </div>
      </div>
    </slide>
  </carousel>
</div>
</template>

<script>
import {
  Carousel,
  Slide
} from 'vue-carousel';
export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss">
.slider {
    width: 70vw;
    .VueCarousel-navigation-button {
        font-size: 40px;
        color: #664391;
        opacity: 1;
        padding: 5rem !important;
        &:focus {
            outline-color: 0 solid white !important;
        }
    }
    .VueCarousel-slide {
        height: 55vh;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
        .post-info {
            border-top: 2px solid #fff;
            border-bottom: 2px solid #fff;
            height: 60%;
            width: 45vw;
            position: relative;
            align-self: center;
            display: grid;
            align-items: center;
            color: #fff;
            h1 {
                background-color: #664391;
                padding: 1rem 0.5rem;
                width: 35vw;
                margin-bottom: 0;
                margin-top: 0;
            }
            span {
                font-size: 14px;
            }
            p {
                margin: 0;
                width: 25vw;
                font-weight: 100;
            }
            button {
                border: none;
                background-color: #664391;
                width: 10vw;
                padding: 0.6rem;
                justify-self: center;
                font-size: 14px;
                color: white;
            }
        }
        .post-photo {
            align-self: center;
            background-image: url("https://images.pexels.com/photos/1028223/pexels-photo-1028223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
            background-size: cover;
            height: 80%;
            display: grid;
            justify-items: center;
        }
    }
}
</style>

<template>
<div class="landing-page">
  <Slider />
  <ListOfPosts />
</div>
</template>

<script>
import Slider from './../components/Elements/Slider'
import ListOfPosts from './../components/listOfPosts'
export default {
  components: {
    Slider,
    ListOfPosts
  },
  name: 'Home'
}
</script>
<style lang="scss">
.landing-page {
    width: 100vw;
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-items: center;
    .navigationItems {
        display: grid;
        width: 80vw;
        grid-template-columns: auto auto;
        grid-template-rows: 100%;
        align-items: center;
        margin-top: 2rem;
        .logo {
            border: 1px solid #fff;
            padding: 0.4rem 1rem;
            color: #fff;
            font-size: 20px;
            justify-self: start;
            border-bottom-right-radius: 25px;
            border-top-left-radius: 25px;
            background-color: #6643914d;
        }
    }
}
.posts {}
</style>

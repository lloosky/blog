<template>
<div class="blog-container">
  <ListOfPosts />
</div>
</template>
<script>
import ListOfPosts from './../components/listOfPosts'
export default {
  name: "Blog",
  components: {
    ListOfPosts
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss">
.blog-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>

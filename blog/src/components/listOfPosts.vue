<template>
<div class="posts-list-container">
  <div class="posts-navigation-bar">
    <div class="search">
      <input type="text" name="" value="" placeholder="find post">
      <div class="search-button">&#10132;</div>
    </div>
    <div class="display-form">
      <span @click="gridColumns = '100%'">&#9776;</span>
      <span @click="gridColumns = '25% 25% 25% 25%'">&#9783;</span>
    </div>
  </div>
  <div class="list-of-posts" :style='{gridTemplateColumns: gridColumns}'>
    <div class="single-post" v-for="post in posts" :key="post.postID" @click="getPostInfo(post.postID)">
      <div class="post-photo-container">
        <div class="post-photo" :style="{backgroundImage: `url(http://localhost:5000/${post.postIMG})`}">
        </div>
      </div>
      <h3>{{post.post.title}}</h3>
      <span>{{post.post.date}}</span>
      <p>{{post.post.body}}</p>
      <button type="button" name="button">read article</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListOfPosts',
  data() {
    return {
      gridColumns: "25% 25% 25% 25%",
      posts: []
    }
  },
  methods: {
    async getPostInfo(id) {
      try {
        console.log(id);
        await this.$http.delete(`http://localhost:5000/api/posts/${id}`)
      } catch (e) {
        console.log(e);
      }
    },
    async getListOfPosts() {
      try {
        const {
          data
        } = await this.$http.get('http://localhost:5000/api/posts')
        console.log(data);
        this.posts = data
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    this.getListOfPosts()
  }
}
</script>
<style lang="scss" scoped>
.posts-navigation-bar {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
    height: 5vh;
    // border-top: 2px solid #664391;
    .search {
        display: grid;
        grid-template-columns: 40% 10%;
        input {
            background-color: transparent;
            border: none;
            color: #fff;
            border-bottom: 1px solid #664391;
            padding-left: 1rem;
            &::placeholder {
                color: #fff;
            }
        }
        .search-button {
            font-size: 1.5rem;
            color: #fff;
        }
    }
    .display-form {
        justify-self: end;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        span {
            margin-left: 0.8rem;
        }
    }
}
.list-of-posts {
    width: 80vw;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    justify-content: center;
    align-content: center;
    grid-gap: 1rem;
    margin-bottom: 3rem;
    .single-post {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        color: #fff;
        display: grid;
        h3,
        p,
        span {
            padding: 0.5rem;
        }
        .post-photo-container {
            border-top: 2px solid #664391;
            .post-photo {
                position: absolute;
                z-index: -1;
                height: 100%;
                width: 100%;
                background-image: url("https://images.pexels.com/photos/1028223/pexels-photo-1028223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
                background-size: cover;
                opacity: 0.2;
            }
        }
        button {
            border: none;
            background-color: #664391;
            width: 8vw;
            padding: 0.4rem;
            justify-self: center;
            font-size: 14px;
            color: white;
            justify-self: end;
            height: 40px;
            align-self: end;
        }
    }
}
</style>

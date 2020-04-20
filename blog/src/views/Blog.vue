<template>
<div class="blog-container">
  <div class="singlepost" v-if="isSinglePostVisible">
    <div class="post-content">
      <h2>{{singlePost.post.title}}</h2>
      <h6>by {{`${singlePost.post.author} | ${singlePost.post.date}`}}</h6>
      <p>{{singlePost.post.body}}</p>
      <span>Likes: {{singlePost.post.likes.length}}</span>
      <span>Comments: {{singlePost.post.comments.length}}</span>
    </div>
    <div class="post-photo" :style="{backgroundImage: `url(http://localhost:5000/${singlePost.postIMG})`}">
    </div>
  </div>
  <div class="post-comments" v-if="isSinglePostVisible">
    <div class="add-comment">
      <input type="text" name="" value="" placeholder="Author" v-model="commentAuthor">
      <input type="text" name="" value="" placeholder="Comment" v-model="commentContent">
      <button type="button" name="button" @click="addComment(singlePost.postID)">add comment</button>
    </div>
    <div class="single-comment" v-for="(comment) in singlePost.post.comments" :key="comment.comment">
      <h6>{{comment.author}}</h6>
      <span>{{comment.comment}}</span>
    </div>
  </div>
  <ListOfPosts />
</div>
</template>
<script>
import Constants from './../utils/Constants'
import ListOfPosts from './../components/listOfPosts'
export default {
  name: "Blog",
  components: {
    ListOfPosts
  },
  data() {
    return {
      commentAuthor: '',
      commentContent: ''
    }
  },
  methods: {
    async addComment(id) {
      try {
        await this.$http.post(Constants.SERVER_URL + `/posts/comment/${id}`, {
          author: this.commentAuthor,
          comment: this.commentContent
        })
        this.singlePost.post.comments.push({
          author: this.commentAuthor,
          comment: this.commentContent
        })
      } catch (e) {
        console.log(e);
      }
      this.commentAuthor = ''
      this.commentContent = ''
    }
  },
  computed: {
    isSinglePostVisible() {
      return this.$store.state.isSinglePostVisible
    },
    singlePost() {
      return this.$store.state.singlePost
    }
  },
  created() {
    this.$store.commit(Constants.GET_LIST_OF_POSTS)
  }
}
</script>
<style lang="scss">
.blog-container {
    display: grid;
    justify-content: center;
    grid-template-columns: 80vw;
    .singlepost {
        display: grid;
        grid-template-columns: 50% 50%;
        height: 50vh;
        .post-content {
            background-color: #fff;
            color: #111;
            padding: 1rem;
        }
        .post-photo {
            background-position: center;
            background-size: cover;
            height: 100%;
        }
    }
    .post-comments {
        .add-comment {
            height: 40px;
            display: grid;
            grid-template-columns: 10% 80% auto;
            margin-top: 10px;
            margin-bottom: 10px;
            button {
                border: none;
                background-color: #664391;
                padding: 0.4rem;
                font-size: 14px;
                color: white;
            }
        }
        .single-comment {
            background-color: #fff;
            padding: 0.5rem;
            h6 {
                margin: 0;
                font-weight: bold;
            }
        }
    }
}
</style>

<template>
<div class="editPage-container">
  <form enctype="multipart/form-data">
    <div class="close-button">
      <button @click="closeEditPost">X</button>
    </div>
    <h2>Edit post - {{postToEdit.post.title}}</h2>
    <input type="text" placeholder="title" v-model="postToEdit.post.title">
    <textarea rows="20" cols="50" placeholder="content" v-model="postToEdit.post.body"></textarea>
    <button @click="editPost(postToEdit.postID)">Submit</button>
  </form>
</div>
</template>
<script>
import Constants from './../utils/Constants'
export default {
  name: "EditPage",
  data() {
    return {
      postToEdit: this.$store.state.postToEdit,
      editedPostTitle: '',
      editedPostContent: ''
    }
  },
  methods: {
    async editPost(id) {
      try {
        if (confirm('Are you sure ?')) {
          this.editedPostTitle = this.postToEdit.post.title
          this.editedPostContent = this.postToEdit.post.body
          await this.$http.put(Constants.SERVER_URL + `/posts/${id}`, {
            title: this.editedPostTitle,
            content: this.editedPostContent
          })
        }
      } catch (e) {
        console.log(e);
      }
      this.closeEditPost()
    },
    closeEditPost() {
      this.showEditPost = false
    }
  },
  computed: {
    showEditPost: {
      get() {
        return this.$store.state.showEditPost
      },
      set(value) {
        this.$store.state.showEditPost = value
      }
    }
  }
}
</script>
<style lang="scss" scoped>
form {
    display: grid;
    grid-template-columns: 80vw;
    justify-content: center;
    .close-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-size: 1.2rem;
        cursor: pointer;
        font-weight: bold;
        button {
            width: 5%;
            background-color: #9364cc;
            transition: 0.2s all;
            &:hover {
                transform: scale(.8);
            }
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
        float: right;
        width: 40%;
    }
    input,
    textarea {
        width: 100%;
        border: none;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #664391;
        color: white;
    }
    input {
        height: 40px;
    }
    h2 {
        color: #111;
    }
}
.editPage-container {
    width: 100%;
    height: 100vh;
    background-color: #fffffffa;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: grid;
    align-content: center;
    justify-content: center;
}
</style>

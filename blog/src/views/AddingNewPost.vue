<template>
<div class="adding-post-form-container">
  <form @submit.prevent="addPost" enctype="multipart/form-data">
    <h2>Add new post - {{post.title}}</h2>
    <input type="text" v-model="post.title" placeholder="title">
    <textarea rows="20" cols="50" v-model="post.body" placeholder="body"></textarea>
    <input type="text" v-model="post.tags" placeholder="tags">
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="validatedCustomFile" ref="file" @change="onSelect" required>
      <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
      <div class="text-white">{{message}}</div>
    </div>
    <button>Submit</button>
  </form>
</div>
</template>
<script>
import {
  getFullDate,
  getHour
} from '../utils/GetDate'
export default {
  name: "AddingNewPost",
  data() {
    return {
      post: {
        title: 'New post title',
        body: '',
        tags: ''
      },
      file: '',
      message: ''
    }
  },
  methods: {
    getFullDate,
    getHour,
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if (!allowedTypes.includes(file.type)) {
        this.message = "Filetype is wrong!!"
      }
      if (file.size > 500000) {
        this.message = 'Too large, max size allowed is 500kb'
      }
    },
    generateInvidualPostId() {
      const id = getHour().split('').reverse().join('').toLowerCase().split(' ').join('').split(':').join('')
      return id + localStorage.getItem('userID')
    },
    async addPost() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('postID', this.generateInvidualPostId());
      formData.append('userID', localStorage.getItem('userID'));
      formData.append('title', this.post.title);
      formData.append('body', this.post.body);
      formData.append('tags', this.post.tags.split(' '));
      formData.append('date', this.getFullDate());
      try {
        await this.$http.post("http://localhost:5000/api/newpost", formData)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss">
.adding-post-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        width: 80vw;
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
            background-color: #6643916b;
            color: white;
        }
        .custom-file {
            width: 40%;
            padding: 0;
        }
        .custom-file-label {
            background-color: #6643916b;
            color: white;
            border-radius: 0;
            border: none;
            &::after {
                border-radius: 0;
                color: #fff;
                background-color: #664391;
            }
        }
        input {
            height: 40px;
        }
        h2 {
            color: #fff;
        }
    }
}
</style>

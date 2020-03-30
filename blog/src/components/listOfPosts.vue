<template>
<div class="posts-list-container">
  <div class="posts-navigation-bar">
    <div class="search">
      <input type="text" name="" value="" placeholder="find post">
      <div class="search-button">&#10132;</div>
    </div>
    <div class="display-form">
      <span @click="gridColumns = 'auto'">&#9776;</span>
      <span @click="gridColumns = 'auto auto auto auto'">&#9783;</span>
    </div>
  </div>
  <div class="list-of-posts" :style='{gridTemplateColumns: gridColumns}'>
    <div class="single-post">
      <div class="post-photo-container">
        <div class="post-photo">
        </div>
      </div>
      <h1>POST TITLE #1</h1>
      <span>september 8, 2020</span>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
      <button type="button" name="button">read article</button>
    </div>
    <div class="single-post">
      <div class="post-photo-container">
        <div class="post-photo">
        </div>
      </div>
      <h1>POST TITLE #1</h1>
      <span>september 8, 2020</span>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
      <button type="button" name="button">read article</button>
    </div>
    <div class="single-post">
      <div class="post-photo-container">
        <div class="post-photo">
        </div>
      </div>
      <h1>POST TITLE #1</h1>
      <span>september 8, 2020</span>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
      <button type="button" name="button">read article</button>
    </div>
    <div class="single-post">
      <div class="post-photo-container">
        <div class="post-photo">
        </div>
      </div>
      <h1>POST TITLE #1</h1>
      <span>september 8, 2020</span>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
      <button type="button" name="button">read article</button>
    </div>
    <div class="single-post">
      <div class="post-photo-container">
        <div class="post-photo">
        </div>
      </div>
      <h1>POST TITLE #1</h1>
      <span>september 8, 2020</span>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
      <button type="button" name="button">read article</button>
    </div>
    <div class="single-post">
      <div class="post-photo-container">
        <div class="post-photo">
        </div>
      </div>
      <h1>POST TITLE #1</h1>
      <span>september 8, 2020</span>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor.</p>
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
      gridColumns: "auto auto auto auto"
    }
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
    height: 100%;
    width: 80vw;
    display: grid;
    grid-template-columns: auto auto auto auto;
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
        h1,
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
            float: right;
        }
    }
}
</style>

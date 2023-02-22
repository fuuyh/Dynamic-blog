<template>
  <div class="posts">
    <section>
      <div class="post__card" v-for="item in books" :key="item._id">
        <h3 class="post__date">
          <!-- 时间需要使用文章创建时间，需要改一下格式 -->
          <time class="post__date" :datetime="item.createdAt">{{ item.createdAt }}</time>
        </h3>
        <h2 class="post__title" @click="$router.push({
          name: 'posts-article',
          params: {
            aid: item._id
          }
        })">
          <a>{{ item.title }}</a>
        </h2>
      </div>
    </section>
    <p class="back__home">
      <a href="/">cd ../</a>
    </p>
  </div>
</template>

<script>
// 引入 文章请求模块
import { getAllArticles } from '@/api/articles'
export default {
  name: 'PostsBox',
  data () {
    return {
      // 存放文章的数组
      books: []
    }
  },
  // 把方法写在methods里面
  methods: {
    async getArticles () {
      const { data } = await getAllArticles()
      if (data.code !== 200) return
      // 将获取到的数据传递给 文章的数组
      // this.books = data.data
      this.books = data.data
      for (let i = 0; i < data.data.length; i++) {
        // this.books[i].createdAt = new Date(data.data[i].createdAt)
        const createdTime = new Date(data.data[i].createdAt)
        // 月份缩写
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec']
        const n = createdTime.getFullYear()
        const y = monthNames[createdTime.getMonth()]
        const r = createdTime.getDate() < 10 ? '0' + createdTime.getDate() : createdTime.getDate()
        // 处理时间， 获取年月日
        this.books[i].createdAt = y + '\xa0' + r + ',' + n
      }
    }
  },
  // 进入页面就获取文章标题，点击文章标题 跳转到文章内容页面， 需要添加文章详情路由，传递id等参数
  created () {
    this.getArticles()
  }
}
</script>

<style lang="scss" scoped>
.posts {
  position: relative;
  ul {
    list-style-type: none;
    padding: 0;
    padding-top: .4rem;
  }
  ul>li:first-child {
    margin-top: -3rem;
  }

  .post__card {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding: 2rem 0;

    .post__date {
      min-width: 12rem;
      font-size: 1.3rem;
      color: #999;
      margin: 0;
      letter-spacing: .15rem;
    }

    .post__title {
      font-size: 2.4rem;
      line-height: 4.8rem;
      margin: 0;
      justify-content: flex-start;
      height: 100%;
      a {
        color: #444;
        font-size: 2rem;
        display: inline;
        border-bottom: unset;
      }

      a:hover {
        color: #68b88e;
        border-bottom: 2px solid transparent;
      }
    }

    @media screen and (max-width: 750px) {
      .post__title {
        font-size: 2.2rem;
        line-height: 2.8rem;
        text-align: left;
      }
    }
  }

  .back__home {
    margin-top: 3rem;
    display: block;
    font-size: 1.3rem;
    text-align: left;
    margin-left: 2rem;

    a {
      color: #999;
      word-spacing: 0.1rem;
      letter-spacing: .1rem;
    }
  }
}</style>

<template>
  <article>
    <!-- 用于接收index里面传递过来的数据，展示文章内容 -->
    <!-- 文章 -->
    <div class="article" v-html="result"></div>
    <!-- cd -->
    <p class="back__home">
      <a @click="$router.push('/posts')">cd ../</a>
    </p>
  </article>
</template>

<script>
// 引入请求，根据id获取文章
import { getOneArticle } from '@/api/articles'
// 引入markdown it
import MarkdownIt from 'markdown-it'
export default {
  name: 'PostArticle',
  data () {
    return {
      result: ''
    }
  },
  props: {
    aid: {
      type: [String, Object],
      required: true
    }
  },
  created () {
    // 进入页面就执行方法
    this.renderArticle()
  },
  methods: {
    // 获取内容并渲染
    async renderArticle () {
      const { data } = await getOneArticle(this.aid)
      // 处理数据， 需要处理的内容有，将文章渲染，解析格式
      // console.log(data)
      const md = new MarkdownIt()
      this.result = md.render(data.data[0].content)
      // console.log(this.aid)
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/styles/mixin.scss';
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

// 文章渲染
article ::v-deep .article {

  text-align: left;
  h1 {
    font-size: 3rem;
    line-height: 3.8rem;
    margin: 5rem 0;
  }
  h2 {
    position: relative;
    font-size: 2.4rem;
    line-height: 4.8rem;
    margin: 3rem 0;
  }
  h2:before {
    content: "";
    border-left: 5px solid #68b88e;
    position: absolute;
    left: -1.5rem;
    height: 75%;
    top: 12%
  }
  h1,h2 {
    text-transform:uppercase;
    letter-spacing: 1px;
  }
  h3 {
    font-size: 2rem;
    line-height:4rem;
    margin: 2.5rem 0;
    letter-spacing: 1px;
  }
  h4 {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin: 2.5rem 0;
    letter-spacing: 1px
  }
  code {
    font-family: Roboto Mono,Menlo,Consolas,monospace;
    background-color: #f4f4f4;
    font-size: .75em;
    padding: 3px 6px;
    border-radius: 2px
  }

  pre {
      font-family: Roboto Mono,Menlo,Consolas,monospace;
      font-size: 1.3rem;
      overflow-x: auto;
      text-align: left;
      padding: 1rem;
      line-height: 2rem;
      background: #f6f6f6;
    margin: .5rem 0;
  }

  pre code {
      padding: 0;
      font-size: inherit
  }

 p, li {
    font-size: 1.6rem;
    line-height: 2.8rem
}

 a {
    color: #68b88e;
    border-bottom: 2px solid transparent;
}

 a:hover {
    border-bottom-color: #68b88e;
}

 img {
    display: block;
    max-width: 70%;
    margin: 1rem auto
}

 ol,ul {
    padding-left: 1.6rem
}

 li {
    position: relative
}

 li:before {
    position: absolute;
    font-weight: 600;
    content: "";
    margin: 0;
    left: -1rem
}

 hr {
    margin: 1.6rem 0;
    height: 1px;
    background-color: #e6e6e6;
    border: none
}

 strong {
    font-weight: 600;
    color: #444
}

 blockquote {
    margin: 2em 0;
    padding-left: 1.6rem;
    border-left: 5px solid #e6e6e6
}

 blockquote p {
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.8em;
    color: #999
}

@media screen and (max-width: 750px) {
     h1 {
        font-size:2.8rem;
        line-height: 3.4rem
    }

     h2 {
        font-size: 2.2rem;
        line-height: 2.8rem;
    }

     h3 {
        font-size: 2rem;
        line-height: 2.5rem
    }
}
}
@media screen and (max-width: 750px) {
  article {
    padding: 0 2.5rem;
  }
}
</style>

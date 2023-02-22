<template>
  <div>
    <h1>Hello.</h1>
    <p>My name is Fu Yuhao.</p>
    <p>
      I am a half-baked programmer. addicted to high-end theory and becoming thinner.
      Occasionally, I will develop several interesting programs to kill time, which are put on my
      <a href="https://github.com/fuuyh" target="_blank">GitHub</a>
      . The project name is
      <a href="https://github.com/fuuyh/some-case" target="_blank">Some-Case</a>
    </p>
    <p>
      I originally wanted to write a blog in English, but considering my limited level, I had to take the second place and build a blog style in English.
    </p>
    <p>
      For this blog, I mainly write my study notes and some magic things.
    </p>
    <p>I always believe that one day in the future, I will be world-famous.</p>
  </div>
</template>

<script>
export default {
  name: 'HomeBox'
}
</script>

<style lang="scss" scoped>
div {
  text-align: left;

  color: #666;
  padding: 0 2rem;
  h1 {
        font-size: 4.5em;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: .1rem;
        // margin-bottom: 0;
      }
      p {
        font-size: 1.6em;
        font-weight: 300;
        line-height: 3;
        // max-width: 28em;
      }
      a {
        text-decoration: none;
        white-space: nowrap;
        color: #121314;
        position: relative;
      }
      a:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 66%;
        left: -0.1em;
        right: -0.1em;
        bottom: 0;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        background-color: rgba(79, 192, 141, 0.5);
      }
      a:hover:after {
        top: 0%;
      }
}
</style>

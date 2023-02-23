<template>
  <header>
    <a class="header__title" @click="$router.push('/')">
      Fu-Yh
    </a>
    <p class="header__content">
      Love for life and frontend tech.
    </p>
    <p class="header__links">
      <a @click="$router.push('/posts')">
        <img src="@/assets/blog.png" alt="blog">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#bbbbbb" d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z"/><path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z"/></svg> -->
      </a>
      <a href="https://github.com/fuuyh" target="_target">
        <img src="@/assets/github.png" alt="github">
      </a>
      <a href="mailto:fuyh98@outlook.com">
        <img src="@/assets/email.png" alt="">
      </a>
    </p>
  </header>
</template>

<script>
export default {
  name: 'HeaderLayout'
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  font-weight: 500;
  a {
    cursor: pointer;
  }
  .header__title {
    margin-bottom: 2rem;
    letter-spacing: .6rem;
    font-size: 1.6rem;
    color: #444;
  }

  .header__content {
    letter-spacing: .3rem;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }
  .header__links {
    display: flex;
    align-items: center;
    margin: 0;
    a {
      padding: 0 .8rem;
      height: 2rem;
      object-fit: cover;
      img, svg {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>

<template>
  <div class="layout__box">
    <HeaderLayout />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderLayout from './components/header.vue'
export default {
  name: 'LayoutBox',
  components: {
    HeaderLayout
  }
}
</script>

<style>
main {
  max-width: 75rem;
  margin: 5rem auto;
}
</style>

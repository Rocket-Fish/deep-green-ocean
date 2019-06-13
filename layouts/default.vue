<template>
  <main>
    <NavLink />
    <nuxt />
  </main>
</template>
<script>
import NavLink from '~/components/nav/Navlink'
export default {
  components: {
    NavLink
  }
}
</script>
<style lang="scss">
@import '~assets/custom.scss';

html {
  font-family: $font-stack;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

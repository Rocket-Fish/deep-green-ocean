<template>
  <span class="tagg">
    {{ tag }}
  </span>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'blank-tag'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';
.tagg {
  padding: 0.5em;
  background-color: $custom-gray;
}
</style>

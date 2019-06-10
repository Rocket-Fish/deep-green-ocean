<template>
  <b-container class="bg-gray">
    <div class="font-weight-bold">
      {{ title }}
    </div>
  </b-container>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';
</style>

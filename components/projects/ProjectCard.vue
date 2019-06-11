<template>
  <div>
    <b-container class="bg-gray">
      <BorderWrapper :title="title" />
    </b-container>
  </div>
</template>
<script>
import BorderWrapper from '~/components/BorderWrapper'
export default {
  components: {
    BorderWrapper
  },
  props: {
    title: {
      type: String,
      default: 'project title'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';
</style>

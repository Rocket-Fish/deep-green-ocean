<template>
  <div>
    nothing here
    {{ getFullDescription }}
  </div>
</template>
<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  computed: {
    getFullDescription() {
      return JSON.stringify(this.$store.state.projects.idToFullDescription)
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('projects/getFullDescriptionConditionally', params.id)
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';
</style>

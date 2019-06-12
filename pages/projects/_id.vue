<template>
  <div>
    {{ JSON.stringify(getFullDescOfCurrentId) }}
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
      return this.$store.state.projects.idToFullDescription
    },
    getFullDescOfCurrentId() {
      return this.getFullDescription[this.$route.params.id]
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

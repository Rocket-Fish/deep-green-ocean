<template>
  <div>
    <BorderWrapper :title="projectData.name" />
    <div class="hide-overflow">
      <img
        :src="projectData.img_url"
        class="max-height-500"
        @click="toProject()"
      />
    </div>
  </div>
</template>
<script>
import BorderWrapper from '~/components/BorderWrapper'
export default {
  components: {
    BorderWrapper
  },
  props: {
    projectData: {
      type: Object,
      default: () => {
        return { name: 'project title' }
      }
    }
  },
  methods: {
    toProject() {
      const currentPath = this.$route.path
      this.$router.push(`${currentPath}/${this.projectData.id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';

.max-height-500 {
  height: auto;
  max-height: 500px;

  width: auto;
  max-width: 100%;
}

.hide-overflow {
  overflow: hidden;
}
</style>

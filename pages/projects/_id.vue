<template>
  <div>
    <b-container class="margin-top-2">
      <BorderWrapper :title="getName" />
      <div class="hide-overflow">
        <img :src="getImg" class="auto-width" />
      </div>
      <div class="margin-top-2">
        <div v-for="desc in getDescList" :key="desc.id">
          <h2 v-if="desc.subtitle != null">
            {{ desc.subtitle }}
          </h2>
          {{ desc.description }}
        </div>
      </div>
      <div class="margin-top-2">
        <h2>Tags</h2>
        <div v-for="tag in getTagsList" :key="tag.id">
          {{ tag.name }}
        </div>
      </div>
      <div class="margin-top-2 margin-bottom-2">
        <h2>Relevant Links</h2>
        <b-button
          v-for="link in getLinksList"
          :key="link.id"
          squared
          :href="link.url"
        >
          {{ link.text }}
        </b-button>
      </div>
    </b-container>
  </div>
</template>
<script>
import BorderWrapper from '~/components/BorderWrapper'
export default {
  components: {
    BorderWrapper
  },
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
    },
    getName() {
      return this.getFullDescOfCurrentId.project.name
    },
    getImg() {
      return this.getFullDescOfCurrentId.project.img_url
    },
    getDescList() {
      return this.getFullDescOfCurrentId.descriptions
    },
    getTagsList() {
      return this.getFullDescOfCurrentId.tags
    },
    getLinksList() {
      return this.getFullDescOfCurrentId.links
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('projects/getFullDescriptionConditionally', params.id)
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';

.margin-top-2 {
  margin-top: 2em;
}
.margin-bottom-2 {
  margin-bottom: 2em;
}

.auto-width {
  width: auto;
  max-width: 100%;
}

.hide-overflow {
  overflow: hidden;
}
</style>

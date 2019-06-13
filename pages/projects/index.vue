<template>
  <div class="vertical-center-content">
    <b-container flex>
      <b-row>
        <b-col>
          <h1>Projects</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-row v-for="{ left, right } in makeLeftRightPairs()" :key="left.id">
            <b-col md="6" class="pad-1">
              <ProjectCard :project-data="left" />
            </b-col>
            <b-col md="6" class="pad-1">
              <ProjectCard
                v-if="!(typeof right === 'undefined')"
                :project-data="right"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProjectCard from '~/components/projects/ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      title: 'Projects'
    }
  },
  computed: {
    getProjectList() {
      return this.$store.state.projects.list
    },
    getRawStoreData() {
      return JSON.stringify(this.getProjectList)
    }
  },
  async fetch({ $axios, store, params }) {
    const data = await $axios.$get(`${store.state.api.url}/projects`)
    store.commit('projects/list', data)

    for (let i = 0; i < data.length; i++) {
      const { id } = data[i]
      await store.dispatch('projects/getFullDescriptionConditionally', id)
    }
  },
  methods: {
    makeLeftRightPairs() {
      const leftRightPairs = []
      const projectList = this.getProjectList
      for (let i = 0; i < projectList.length; i += 2) {
        const leftRightPair = {
          left: projectList[i],
          right: projectList[i + 1]
        }
        leftRightPairs.push(leftRightPair)
      }
      return leftRightPairs
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';
</style>

<template>
  <div>
    <BorderWrapper :title="projectData.name" />
    <div class="hide-overflow">
      <div
        :style="{ backgroundImage: `url(${projectData.img_url})` }"
        class="max-height-500 contain greyOnHover "
        @click="toProject()"
      >
        <div class="overlay" @mouseover="mouseOver()" @mouseout="mouseOut()">
          <div v-if="show" class="margin-2 pad-1 click-through">
            <TagDisplay
              v-for="tag in getTagsList"
              :key="tag.id"
              :tag="tag.name"
              class="margin-1"
            />
          </div>
        </div>
        <img :src="projectData.img_url" class="hidden max-height-500" />
      </div>
    </div>
  </div>
</template>
<script>
import BorderWrapper from '~/components/BorderWrapper'
import TagDisplay from '~/components/projects/TagDisplay'
export default {
  components: {
    BorderWrapper,
    TagDisplay
  },
  props: {
    projectData: {
      type: Object,
      default: () => {
        return { name: 'project title' }
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    getTagsList() {
      const fullDescList = this.$store.state.projects.idToFullDescription
      const tagList = fullDescList[this.projectData.id].tags
      return tagList
    }
  },
  methods: {
    toProject() {
      const currentPath = this.$route.path
      this.$router.push(`${currentPath}/${this.projectData.id}`)
    },
    mouseOver() {
      this.show = true
    },
    mouseOut() {
      this.show = false
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

.contain {
  background-size: contain;
}

.hide-overflow {
  overflow: hidden;
}

.hidden {
  visibility: hidden;
}

.click-through {
  pointer-events: none;
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  transition: 0.4s;
  cursor: pointer;
  margin: 1em;
}

.greyOnHover {
  &:hover .overlay {
    background-color: rgb(0, 0, 0); // for bad browsers
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>

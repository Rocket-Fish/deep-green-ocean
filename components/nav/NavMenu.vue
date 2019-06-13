<template>
  <transition name="slide-fade-up">
    <div v-if="!getShow" class="veil">
      <div class="centerParent">
        <div class="center big-button pad-5 margin-top-5 " @click="toHome()">
          <h1>about</h1>
        </div>
        <div class="center big-button pad-5" @click="toProjects()">
          <h1>projects</h1>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  computed: {
    getShow() {
      return this.$store.state.menu.show
    }
  },
  methods: {
    toHome() {
      this.$router.push({
        path: '/'
      })
      this.$store.commit('menu/invert')
    },
    toProjects() {
      this.$router.push({
        path: '/projects'
      })
      this.$store.commit('menu/invert')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';

.big-button {
  cursor: pointer;
  background-color: $color-primary-3;

  transition: 0.4s;
  &:hover {
    background-color: $color-primary-2;
    transform: scale(1.1);
  }
}

.veil {
  position: fixed;
  z-index: 9000;
  background-color: $color-primary-4;
  width: 100vw;
  height: 100vh;
  top: 0;
}

.centerParent {
  position: absolute;
  left: 50%;
}

.center {
  position: relative;
  margin: 0 auto;
  left: -50%;
}

.margin-top-5 {
  margin-top: 8em;
}

.pad-5 {
  margin-bottom: 1em;
  padding: 4em;
  padding-left: 8em;
  padding-right: 8em;
}

.slide-fade-up-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-up-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-up-enter,
.slide-fade-up-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}
</style>

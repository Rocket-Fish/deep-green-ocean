<template>
  <transition name="fade">
    <div
      v-if="iscurrentRouteNotAbout()"
      :key="iscurrentRouteNotAbout()"
      class="fixation left"
      @click="onClick()"
    >
      <div class="vertical-center-content">
        <div class="highlight">
          <i class="line line-1"></i>
          <i class="line"></i>
          <i class="line line-3"></i>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$router.back()
    },
    iscurrentRouteNotAbout() {
      return this.$route.path !== '/'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';

.fixation {
  position: fixed;
  min-width: 5vw;
  width: 3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  min-height: 100vh;
  transition: 1s;
  cursor: pointer;
  &:hover {
    .highlight {
      background-color: $color-secondary-1-4;
    }
    transform: scale(1.1);
    background-color: $color-secondary-1-4;
  }
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
}

.left {
  left: 0px;
}

.right {
  right: 0px;
}

.highlight {
  transition: 1.5s;
  background-color: $color-primary-3;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.line {
  display: block;
  width: 52px;
  height: 2px;
  margin: 8px;
  background-color: $custom-gray;

  transition: 0.4s;
}

.line-1 {
  width: 26px;
  transform: rotate(-45deg) translateX(-3px);
}
.line-3 {
  width: 26px;
  transform: rotate(45deg) translateX(-3px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s cubic-bezier(1, 0.05, 0.72, 0.87);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

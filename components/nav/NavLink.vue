<template>
  <div>
    <NavMenu />
    <transition name="slide-fade">
      <div v-if="getShow" class="three-lines" @click="revertShow()">
        <i class="line"></i>
        <i class="line"></i>
        <i class="line"></i>
      </div>
    </transition>
    <transition name="slide-fade-up">
      <div v-if="!getShow" class="cross-lines" @click="revertShow()">
        <i class="line rotate45 margin-none"></i>
        <i class="line rotate-45 margin-none"></i>
      </div>
    </transition>
  </div>
</template>
<script>
import NavMenu from '~/components/nav/NavMenu.vue'

export default {
  components: {
    NavMenu
  },
  computed: {
    getShow() {
      return this.$store.state.menu.show
    }
  },
  methods: {
    revertShow() {
      this.$store.commit('menu/invert')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';

$break-md: 768px;

.three-lines {
  position: fixed;
  right: 6vw;
  top: 4vh;
  z-index: 9998;
  cursor: pointer;
  padding: 10px 8px;

  background-color: $color-primary-3;

  &:hover .line {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.cross-lines {
  position: fixed;
  right: 6vw;
  top: 4vh;
  z-index: 9998;
  cursor: pointer;
  background-color: $color-primary-3;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;

  &:hover .line {
    &.rotate45 {
      transform: rotate(55deg);
    }
    &.rotate-45 {
      transform: rotate(-55deg);
    }
  }
}

.line {
  display: block;
  width: 52px;
  height: 2px;
  margin: 8px;
  background-color: $custom-gray;

  transition: 0.4s;
}

.margin-none {
  margin: 0px;
}

.rotate45 {
  transform: rotate(45deg);
}

.rotate-45 {
  transform: rotate(-45deg);
}

.slide-fade-up-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-up-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-up-enter,
.slide-fade-up-leave-to {
  transform: translateY(-90vh);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(90vh);
  opacity: 0;
}
</style>

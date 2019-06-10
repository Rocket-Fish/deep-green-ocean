<template>
  <section class="pad-top">
    <b-container>
      <b-row>
        <b-col sm="4"><ProfilePic /></b-col>
        <b-col sm="8" class="gray-bg">
          <div>
            some other stuffs here
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import ProfilePic from '~/components/ProfilePic.vue'

export default {
  components: {
    ProfilePic
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/constants.scss';

.pad-top {
  padding-top: 10em;
}
.gray-bg {
  background-color: $custom-gray;
}
</style>

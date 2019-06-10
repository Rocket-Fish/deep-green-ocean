<template>
  <section class=" pad_top ">
    <b-container>
      <b-row>
        <b-col sm="4"><ProfilePic /></b-col>
        <b-col sm="8" class="white_bg">
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
.pad_top {
  padding-top: 10em;
}
.white_bg {
  background-color: white;
}
</style>

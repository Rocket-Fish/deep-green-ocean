<template>
  <b-container class="bg-white pad-1">
    <b-row align-v="center" align-h="center">
      <b-col md="4">
        <ProfilePic class="center" />
      </b-col>
      <b-col md="6" class="bg-gray pad-1">
        <h2>Hello, My name is Jimmy.</h2>
        <div class="font-weight-bold">
          I am a Full Stack Developer based in Toronto, Canada.
        </div>
        <div class="font-weight-bold">
          I make some cool
          <nuxt-link to="/projects">Projects.</nuxt-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
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
</style>

<template>
  <div class="vertical-center-content">
    <b-container flex>
      <b-row>
        <b-col>
          <IntroBox />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <MaintainanceBox />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import IntroBox from '~/components/IntroBox.vue'
import MaintainanceBox from '~/components/MaintainanceBox.vue'

export default {
  components: {
    IntroBox,
    MaintainanceBox
  }
}
</script>
<style>
.vertical-center-content {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>

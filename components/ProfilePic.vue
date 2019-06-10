<template>
  <div class="image_cropper">
    <img src="~/assets/profile.png" class="profile_pic" />
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import '~assets/constants.scss';

.image_cropper {
  width: 15rem;
  height: 15rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.profile_pic {
  display: inline;
  margin: 0 auto;
  //margin-left: 1%; //centers the image
  height: 100%;
  width: 100%;
  background-color: $custom-gray;
}
</style>

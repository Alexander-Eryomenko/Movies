<template>
  <div class="wrapper-video">
    <video class="player" id="player" playsinline controls data-poster="/path/to/poster.jpg">
  <source src="/path/to/video.mp4" type="video/mp4" />
  <source src="/path/to/video.webm" type="video/webm" />

  <!-- Captions are optional -->
  <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
</video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer'
}
</script>

<style lang="scss" scoped>
  .wrapper-video {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .player {
    width: 60%;
  }
</style>

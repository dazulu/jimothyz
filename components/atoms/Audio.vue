<template>
  <audio id="audio" class="audio-player" preload="auto" controls>
    <source src="/audio.ogg" type="audio/ogg" />
    <source src="/audio.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>

<script>
  const initSecretSound = () => {
    if (window.addEventListener) {
      const audioElement = document.getElementById('audio')

      if (audioElement) {
        const code = '66,76,69,83,83,84,72,69,82,65,73,78,83'
        let captured = []

        audioElement.volume = 0.5 // don't want to burst eardrums

        window.addEventListener('keydown', (e) => {
          captured.push(e.keyCode)

          if (captured.toString().indexOf(code) >= 0) {
            audioElement.play()
            captured = []
          }
        }, true)
      }
    }
  }

  if (process.browser) {
    initSecretSound()
  }
</script>

<style lang="scss" scoped>
  .audio-player {
    display: none;
    pointer-events: none;
    position: absolute;
    bottom: -1337px;
    left: -1337px;
  }
</style>

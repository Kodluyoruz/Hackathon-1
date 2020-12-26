<template>
  <div class="timer">
    <h1>Sıradaki Hackathon'a kalan süre</h1>
    <flip-countdown deadline="2021-01-02 10:00:00"></flip-countdown>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
    components: { FlipCountdown }
}
</script>

<style scoped>
.timer {
  margin-top: 30px;
  text-align: center;
}
</style>

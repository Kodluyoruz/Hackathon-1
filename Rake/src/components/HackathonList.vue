<script>
import HackathonListItem from './HackathonListItem';
import store from '../store';

export default {
  components: {
    HackathonListItem
  },
  data() {
    return {
      hackathons: [],
    };
  },
  mounted() {
    store.fetchHackathons()
      .then(({ data }) => {
        this.hackathons = data.data;
      });
  },
}
</script>

<template>
  <div class="hackathon-list">
    <h1 class="hackathon-list__title">Sıradaki Hackathonlar</h1>
    <hackathon-list-item
          v-for="hackathon in hackathons"
          :key="hackathon.id"
          :id="hackathon.id"
          :hackathon="hackathon.attributes"
    />
  </div>
</template>

<style lang="scss">
.hackathon-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  &__title {
    font-size: 2rem;
  }
}
</style>

<script>
import Navbar from '../components/Navbar';
import ContentLoader from '../components/ContentLoader';
import store from '../store';
import moment from 'moment';

export default {
  data() {
    return {
      isLoading: false,
      hackathon: {},
    }
  },
  components: {
    Navbar,
    ContentLoader,
  },
  computed: {
    dateTime() {
      return moment.utc(this.hackathon.start_time).format('LL');
    }
  },
  activated() {
    this.isLoading = true;
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;

    store.fetchHackathonById(id)
      .then(({ data }) => {
        this.hackathon = data.data.attributes;
      })
      .finally(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000)
      })
  }
}
</script>

<template>
  <div class="hackathon-detail-wrapper">
    <Navbar />
    <div class="hackathon-detail">
      <content-loader v-if="isLoading" />
      <template v-else>
        <div class="hackathon-detail__header">
          <img
            src="../assets/Sponsors/kodluyoruz.png"
            class="hackathon-detail__header-logo"
          />
          <h1 class="hackathon-detail__header-title">
            {{ hackathon.title }}
          </h1>
          <p class="hackathon-detail__header-date">
            {{ dateTime }}
          </p>
        </div>
        <div class="hackathon-detail__content">
          <p>
            {{ hackathon.description }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
$bg-color: rgb(249, 250, 251);
$content-color: rgb(75, 85, 99);
$box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
  0 0 0 1px rgba(10, 10, 10, 0.02);

.hackathon-detail-wrapper {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  .hackathon-detail {
    margin: 3rem 0;
    border-radius: 8px;
    text-align: center;
    padding: 1rem 4rem;
    box-shadow: $box-shadow;

    &__header {
      &-logo {
        margin-top: 36px;
      }

      &-title {
        margin: 0;
      }

      &-date {
        margin: 1rem 2rem 0 0;
      }
    }

    &__content {
      white-space: pre-line;
      color: $content-color;
      line-height: 1.75rem;
      padding-bottom: 2rem;
    }
  }
}
</style>

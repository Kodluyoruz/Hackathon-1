<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  components: {
    ContentLoader,
  }
}
</script>

<template>
  <ContentLoader>
    <rect x="80" y="73" rx="3" ry="3" width="254" height="6" />
    <rect x="78" y="88" rx="3" ry="3" width="254" height="6" />
    <rect x="150" y="103" rx="3" ry="3" width="118" height="6" />
    <circle cx="210" cy="27" r="22" />
    <circle cx="181" cy="151" r="6" />
    <circle cx="211" cy="151" r="6" />
    <circle cx="241" cy="151" r="6" />
  </ContentLoader>
</template>

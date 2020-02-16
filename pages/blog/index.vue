<template>
  <div id="blog" class="page-wrapper blog">
    <main-section theme="one-column">
      <template v-slot:default>
        <h1 class="title">
          Blog
        </h1>

        <!-- All Posts -->
        <div class="column is-10 is-offset-1">
          <posts-grid :per-row="2" />
        </div>
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../../helper'

export default {
  name: 'Blog',
  head() {
    return {
      title: `Blog | ${this.$siteConfig.siteName}`
    }
  },
  components: {},
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.blog .under-subtitle {
  border-top: none;
}
</style>
